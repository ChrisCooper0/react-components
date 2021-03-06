import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getUsers } from "./API";

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 800px;
  height: 800px;
  margin: 0 auto;
  overflow: auto;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 50px;
  margin: 10px;
  border-radius: 5px;
  background: lightskyblue;
`;

const EndlessScroll = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const loadUsers = async () => {
      const newUsers = await getUsers(page);
      setUsers((prev) => [...prev, ...newUsers]);
    };
    loadUsers();
  }, [page]);

  return (
    <>
      <Link className="link" to="/">
        Back
      </Link>
      <Content onScroll={handleScroll}>
        {users &&
          users.map((user) => <User key={user.cell}>{user.email}</User>)}
      </Content>
    </>
  );
};

export default EndlessScroll;

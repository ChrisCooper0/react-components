import ReactPaginate from "react-paginate";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;

  & h2 {
    margin-right: 0.5rem;
  }
`;

const List = styled.div`
  margin: 1rem 0 1rem 0;
`;

const BodyText = styled.p`
  text-transform: capitalize;
  line-height: 1.5rem;
`;

const Pagination = () => {
  const [apiData, setApiData] = useState();

  const fetchData = async (page = 1) => {
    const perPage = 15;
    const offset = page * perPage - perPage;

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`
    );
    const data = await response.json();
    console.log(data);
    setApiData(data.results);
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  return (
    <>
      <Link className="link" to="/">
        Back
      </Link>
      <Container>
        <Header>
          <h2>Pokémon</h2>
          <img
            src="https://www.pngitem.com/pimgs/m/2-25193_pokemon-ball-transparent-background-transparent-background-pokeball-png.png"
            alt=""
            width="33px"
            height="33px"
          />
        </Header>
        <List>
          {apiData &&
            apiData.map(({ name, url }) => (
              <BodyText key={url}>{name}</BodyText>
            ))}
        </List>
      </Container>
      <ReactPaginate
        pageCount={Math.ceil(1118 / 15)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        containerClassName={"pagination"}
        activeClassName={"active"}
        onPageChange={(apiData) => fetchData(apiData.selected + 1)}
      />
    </>
  );
};

export default Pagination;

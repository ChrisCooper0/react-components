import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  label,
  input {
    margin-right: 0.5rem;
  }
`;

const Button = styled.button`
  padding: 0.4rem 0.5rem;
  border-radius: 5px;
  margin: 2rem 0;
  border: transparent;
  background-color: lightblue;
  cursor: pointer;
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LocalStorage = () => {
  const [text, setText] = useState("");

  const [localText, setLocalText] = useState("");

  const handleSubmit = (e) => {
    localStorage.clear();
    e.preventDefault();
    localStorage.setItem("text", text);
    setText(" ");
  };

  const retrieveLocalStorage = () => {
    setLocalText(localStorage.getItem("text"));
  };

  const clear = () => {
    localStorage.clear();
    setText("");
    setLocalText("");
  };

  return (
    <>
      <Link className="link" to="/">
        Back
      </Link>
      <FormWrapper>
        <form onSubmit={handleSubmit}>
          <label htmlFor="text">Input:</label>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            required
            id="text"
            name="text"
            value={text}
          />
          <Button type="submit">Save to localStorage</Button>
        </form>
      </FormWrapper>
      <TableWrapper>
        <Button onClick={retrieveLocalStorage}>
          Retrieve from localStorage
        </Button>
        <table>
          <th>From localStorage</th>
          <tr>
            <td>{localText}</td>
          </tr>
        </table>
        <Button onClick={clear}>Reset </Button>
      </TableWrapper>
    </>
  );
};

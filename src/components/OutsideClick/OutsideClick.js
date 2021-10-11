import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";
import styled from "styled-components";

const OutsideClick = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;

  const StyledButton = styled.button`
    border: none;
    outline: none;
    padding: 10px 8px;
    border-radius: 4px;
    background-color: lightblue;
    color: #000;
    cursor: pointer;
    font-size: 16px;
    margin-bottom: 2rem;
  `;

  const StyledDiv = styled.div`
    background-color: lightblue;
    padding: 2rem;
  `;

  return (
    <>
      <Link className="link" to="/">
        Back
      </Link>{" "}
      <StyledWrapper>
        <StyledButton onClick={handleClick}>
          {isOpen ? "Close" : "Open"}
        </StyledButton>
        <OutsideClickHandler onOutsideClick={handleClick}>
          {isOpen && (
            <StyledDiv>
              <h3>Click outside this box to close</h3>
            </StyledDiv>
          )}
        </OutsideClickHandler>
      </StyledWrapper>
    </>
  );
};

export default OutsideClick;

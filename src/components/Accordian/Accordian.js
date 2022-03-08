import React, { useState } from "react";

import styled from "styled-components";
import { Data } from "./Data";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";

const AccordianWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 20px;
  height: 70vh;
  background: ${(props) => props.theme.background.light};
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;

  h1 {
    padding: 1rem;
    font-size: 1.5rem;

    span {
      margin-right: 1rem;
    }
  }
`;

const Dropdown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 100%;
  p {
    font-size: 1.25rem;
  }
`;

const Accordian = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#000", size: "20px" }}>
      <Link className="link" to="/">
        Back
      </Link>
      <AccordianWrapper>
        <div>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p> {item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </div>
      </AccordianWrapper>
    </IconContext.Provider>
  );
};

export default Accordian;

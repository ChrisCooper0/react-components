import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledSlide = styled.div`
  background: ${(props) => props.theme.background.blue[`${props.bgColor}00`]};
  height: 250px;
  width: 250px;
  margin: 0 auto;
  border-radius: 5px;
`;

const Wrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const StyledHeader = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const Splider = () => {
  const bgColor = 1;

  return (
    <>
      <Link className="link" to="/">
        Back
      </Link>
      <Wrapper>
        <StyledHeader>Splide</StyledHeader>
        <Splide
          options={{
            perPage: 4,
            gap: "5rem",
            arrows: false,
            pagination: false,
            drag: "free",
          }}
        >
          {[...Array(8)].map((_, index) => (
            <SplideSlide key={index}>
              <StyledSlide bgColor={index > 8 ? bgColor : bgColor + index} />
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
    </>
  );
};

export default Splider;

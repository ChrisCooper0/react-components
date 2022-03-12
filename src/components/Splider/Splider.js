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
`;

const Splider = () => {
  const bgColor = 1;

  return (
    <>
      <Link className="link" to="/">
        Back
      </Link>
      <Splide>
        {[...Array(8)].map((_, index) => (
          <SplideSlide key={index}>
            <StyledSlide bgColor={index > 8 ? bgColor : bgColor + index} />
          </SplideSlide>
        ))}
      </Splide>
    </>
  );
};

export default Splider;

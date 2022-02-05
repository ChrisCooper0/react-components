import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const StyledWrapper = styled.div`
  position: relative;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
`;

const StyledImage1 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 380px;
  width: 400px;
  animation: fadeIn linear 0.5s;
`;

const StyledImage2 = styled.img`
  position: absolute;
  top: 180px;
  left: 140px;
  height: 450px;
  width: 350px;
  animation: fadeIn linear 0.5s;
`;

const StyledImage3 = styled.img`
  position: absolute;
  top: 120px;
  left: -100px;
  height: 400px;
  width: 370px;
  animation: fadeIn linear 0.5s;
`;

const ImageFlick = () => {
  let image1 = document.querySelector(".image1");
  let image2 = document.querySelector(".image2");
  let image3 = document.querySelector(".image3");

  let clickCount = 0;

  const handleClick = () => {
    if (clickCount === 0) {
      image1.style.zIndex = "3";
      image2.style.zIndex = "1";
      image3.style.zIndex = "2";
      clickCount++;
    } else if (clickCount === 1) {
      image1.style.zIndex = "2";
      image2.style.zIndex = "3";
      image3.style.zIndex = "1";
      clickCount++;
    } else if (clickCount === 2) {
      image1.style.zIndex = "1";
      image2.style.zIndex = "2";
      image3.style.zIndex = "3";
      clickCount++;
    }

    if (clickCount === 3) {
      clickCount = 0;
    }
  };

  return (
    <div>
      <Link className="link" to="/">
        Back
      </Link>
      <StyledHeader>Click to cycle through images</StyledHeader>
      <StyledWrapper className="wrapper" onClick={handleClick}>
        <StyledImage1
          className="image1"
          src="https://images.pexels.com/photos/2805126/pexels-photo-2805126.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <StyledImage2
          className="image2"
          src="https://images.pexels.com/photos/2662792/pexels-photo-2662792.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <StyledImage3
          className="image3"
          src="https://images.pexels.com/photos/2363814/pexels-photo-2363814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
      </StyledWrapper>
    </div>
  );
};

export default ImageFlick;

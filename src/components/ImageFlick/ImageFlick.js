import React, { useState } from "react";
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
  const [clickCount, setClickCount] = useState(0);
  const [image1zIndex, setImage1zIndex] = useState("1");
  const [image2zIndex, setImage2zIndex] = useState("2");
  const [image3zIndex, setImage3zIndex] = useState("3");

  const handleClick = () => {
    if (clickCount === 0) {
      setImage1zIndex("3");
      setImage2zIndex("1");
      setImage3zIndex("2");
      setClickCount(clickCount + 1);
    } else if (clickCount === 1) {
      setImage1zIndex("2");
      setImage2zIndex("3");
      setImage3zIndex("1");
      setClickCount(clickCount + 1);
    } else if (clickCount === 2) {
      setImage1zIndex("1");
      setImage2zIndex("2");
      setImage3zIndex("3");
      setClickCount(0);
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
          style={{ zIndex: image1zIndex }}
        />
        <StyledImage2
          className="image2"
          src="https://images.pexels.com/photos/2662792/pexels-photo-2662792.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          style={{ zIndex: image2zIndex }}
        />
        <StyledImage3
          className="image3"
          src="https://images.pexels.com/photos/2363814/pexels-photo-2363814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          style={{ zIndex: image3zIndex }}
        />
      </StyledWrapper>
    </div>
  );
};

export default ImageFlick;

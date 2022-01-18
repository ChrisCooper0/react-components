import { FaArrowCircleUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 100rem;
`;

const StyledButton = styled(FaArrowCircleUp)`
  position: fixed;
  background-color: transparent;
  z-index: 999;
  right: -100px;
  bottom: 50px;
  font-size: 35px;
  color: #535353;
  cursor: pointer;
  transform: translateX(-150px);
  animation: slideLeft 1s;

  @keyframes slideLeft {
    0% {
      transform: translateX(-100px);
    }
    100% {
      transform: translateX(-150px);
    }
  }

  @media screen and (max-width: 635px) {
    right: -135px;
    bottom: 50px;
    font-size: 30px;
  }

  display: ${(props) => (props.showButton ? "block" : "none")};
`;

function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
    });
  }, []);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Link className="link" to="/">
        Back
      </Link>
      <Heading>Scroll Down to reveal button</Heading>
      <StyledButton onClick={handleClick} showButton={showButton} />
    </>
  );
}

export default BackToTopButton;

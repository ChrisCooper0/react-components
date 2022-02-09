import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import IconStar from "./IconStar";

const StarRating = ({ rating, fullColor, emptyColor }) => {
  let starRatings = [
    { type: "empty" },
    { type: "empty" },
    { type: "empty" },
    { type: "empty" },
    { type: "empty" },
  ];

  let roundedRating = Math.round(rating * 2) / 2;

  for (let i = 0; i < roundedRating; i++) {
    if (roundedRating % 1 === 0 || roundedRating > i + 0.5) {
      starRatings.splice(i, 1, { type: "full" });
    } else {
      starRatings.splice(i, 1, { type: "half" });
    }
  }

  return (
    <>
      <Link className="link" to="/">
        Back
      </Link>
      <StyledStarRating>
        <div className="code">
          <code>
            StarRating takes in 3 props:
            <ul>
              <li>rating: number</li>
              <li>fullColor: string</li>
              <li>emptyColor: string</li>
            </ul>
          </code>
        </div>
        {[...Array(5)].map((_, i) => {
          return (
            <IconStar
              key={i}
              type={starRatings[i].type}
              fullColor={fullColor}
              emptyColor={emptyColor}
            />
          );
        })}
      </StyledStarRating>
    </>
  );
};

const StyledStarRating = styled.div`
  text-align: center;
  .code {
    margin-bottom: 1rem;
  }
`;

export default StarRating;

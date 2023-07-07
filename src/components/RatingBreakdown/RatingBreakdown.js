import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const OuterBar = styled.div`
  height: 11px;
  width: 200px;
  outline: 1px solid black;
  border-radius: 5px;
  overflow: hidden;
`;
const InnerBar = styled.div`
  background: lightcoral;
  height: 100%;
  width: ${(props) => `${props.width}%`};
  border-radius: 5px;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
`;

const RatingBreakdown = () => {
  const ratings = {
    totalRatings: 11,
    breakdown: {
      rating_1: 1,
      rating_2: 2,
      rating_3: 0,
      rating_4: 5,
      rating_5: 3,
    },
  };

  const calculateRatingPercentages = (ratings, totalRatings) => {
    const percentages = {};
    const factor = 100 / totalRatings;

    Object.keys(ratings).forEach((key) => {
      const ratingCount = ratings[key];
      const percentage = Math.round(ratingCount * factor * 100) / 100; // Rounded to 2 decimal places
      percentages[key] = percentage;
    });

    return percentages;
  };

  const percentages = calculateRatingPercentages(
    ratings.breakdown,
    ratings.totalRatings
  );

  return (
    <>
      <Link className="link" to="/">
        Back
      </Link>
      <Container>
        <p>Total ratings: {ratings.totalRatings}</p>
        {Object.entries(percentages).map(([key, value], i) => {
          return (
            <StyledWrapper key={i}>
              <p>Rated {i + 1}</p>
              <OuterBar>
                <InnerBar width={value}></InnerBar>
              </OuterBar>
            </StyledWrapper>
          );
        })}
      </Container>
    </>
  );
};

export default RatingBreakdown;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IconStar from "../StarRating/IconStar";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Stars = () => {
  const [hover, setHover] = useState(null);
  const [ratingText, setRatingText] = useState("");

  const [onHiglight, setOnHighlight] = useState(true);

  let roundedRating = Math.round(3.5 * 2) / 2;

  let starRatings = [
    { type: "empty" },
    { type: "empty" },
    { type: "empty" },
    { type: "empty" },
    { type: "empty" },
  ];

  for (let i = 0; i < roundedRating; i++) {
    if (roundedRating % 1 === 0 || roundedRating > i + 0.5) {
      starRatings.splice(i, 1, { type: "full" });
    } else {
      starRatings.splice(i, 1, { type: "half" });
    }
  }

  const ratingLabel = ["Poor", "Fair", "Average", "Good", "Excellent"];

  const handleInteraction = (ratingValue, i) => {
    if (onHiglight) {
      setHover(ratingValue);

      setRatingText(ratingLabel[i]);

      // Vibrate - Not iOs
      const canVibrate = window.navigator.vibrate;
      if (canVibrate && i !== null) {
        navigator.vibrate(200);
      }
    }
  };

  return (
    <>
      <Link className="link" to="/">
        Back
      </Link>

      <Wrapper>
        <Button onClick={() => setOnHighlight(!onHiglight)}>
          onHiglight prop switch
        </Button>
        <div>
          {[...Array(5)].map((_star, i) => {
            const ratingValue = i + 1;
            return (
              <label key={i} tabIndex={i + 1}>
                <input type="radio" name="rating" value={i} />
                {!onHiglight && (
                  <span
                    className="star"
                    onMouseEnter={() => handleInteraction(ratingValue, i)}
                    onMouseLeave={() => handleInteraction(null)}
                  >
                    <IconStar
                      type={starRatings[i].type}
                      fullColor={"blue"}
                      emptyColor={"grey"}
                    />
                  </span>
                )}
                {onHiglight && (
                  <span
                    onMouseEnter={() => handleInteraction(ratingValue, i)}
                    onMouseLeave={() => handleInteraction(null)}
                  >
                    {ratingValue <= hover ? (
                      <AiFillStar size={50} className="star" />
                    ) : (
                      <AiOutlineStar size={50} className="star" />
                    )}
                  </span>
                )}
              </label>
            );
          })}
        </div>
        <p>{ratingText}</p>
      </Wrapper>
    </>
  );
};

const Button = styled.button`
  border: none;
  padding: 8px;
  border-radius: 5px;
  margin-bottom: 20px;
  color: white;
  background: grey;

  &:hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .star {
    cursor: pointer;
  }

  input[type="radio"] {
    display: none;
  }
`;

export default Stars;

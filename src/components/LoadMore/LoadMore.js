import { useState, useEffect } from "react";

import styled from "styled-components";

// Change StyledContainer flex-wrap to wrap-reverse to add new items to the top
const StyledContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledCard = styled.div`
  width: 100%;
  max-width: 300px;
  padding: 20px;
  color: #000;
  background-color: lightblue;
  margin: 20px 10px;
  border-radius: 5px;
`;

const StyledText = styled.p`
  display: flex;
  justify-content: center;
  font-size: 16px;
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
  padding: 16px 12px;
  border-radius: 4px;
  background-color: lightblue;
  color: #000;
  cursor: pointer;
  font-size: 16px;
`;

export const LoadMore = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos").then((response) =>
      response.json().then((data) => setItems(data))
    );
  }, []);

  const loadItems = () => {
    setVisible(visible + 3);
  };

  return (
    <StyledContainer>
      {items.slice(0, visible).map((item) => {
        return (
          <StyledCard>
            <StyledText key={item.id}>{item.id}</StyledText>
          </StyledCard>
        );
      })}
      <StyledButton onClick={loadItems}>Load More</StyledButton>
    </StyledContainer>
  );
};

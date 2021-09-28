import { useState, useEffect } from "react";

// Adds items to bottom
// Change .container flex-wrap to wrap-reverse to add new items to the top
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
    <div>
      <div className="container">
        {items.slice(0, visible).map((item) => {
          return (
            <div className="card">
              <p>{item.id}</p>
            </div>
          );
        })}
      </div>

      <button onClick={loadItems}>Load More</button>
    </div>
  );
};

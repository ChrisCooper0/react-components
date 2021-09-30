import React, { useEffect, useState } from "react";

const JSONFetch = () => {
  const [data, setData] = useState([]);

  async function getData() {
    const response = await fetch("../dummydata.json");
    const dataRes = await response.json();
    setData(dataRes);
    console.log(data, "getDatasyncFunction");
  }

  useEffect(() => {
    getData();
    console.log(data, "useEffect");
  }, []);

  return (
    <div>
      <p>Test</p>
      {/* {Object.entries(data).map((item) => (
      <p key={item.id}>{item.name}</p>
    ))} */}
      {/* {data.map((item) => (
      <p key={item.id}>{item.name}</p>
    ))} */}
      <p>Test</p>
    </div>
  );
};

export default JSONFetch;

import React from "react";
import Header from "./Header";
import Body from "./Body";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Body />
    </div>
  );
};

export default Home;

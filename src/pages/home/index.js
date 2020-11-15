import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from './Footer';

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: '100%' }}>
      <Header/>
      <Body style={{ flex: 3, flexGrow: 1 }}/>
      <Footer style={{ flex: 1 }}/>
    </div>
  );
};

export default Home;

import React from "react";
import InfoButtons from "./InfoButtons";
import Greeting from './Greeting';
import { headerContainer } from './styles';

const Header = () => (
  <div style={headerContainer}>
    <Greeting />
    <InfoButtons />
  </div>
);

export default Header;

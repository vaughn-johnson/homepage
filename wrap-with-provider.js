import React from "react"
import { ParallaxProvider } from 'react-scroll-parallax';

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => (
  <ParallaxProvider>
    {element} 
  </ParallaxProvider>
);
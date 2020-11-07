import React from 'react';

const bodyText = { 
  fontFamily: "Poppins",
  fontWeight: 400,
  marginLeft: "10vw",
  marginRight: "10vw",
  fontSize: 'calc(10px + 1.5vw)',
}

export {
  bodyText
};

// Gatsby requires a default export
// to be a component or string

const NullComponent = () => (<div></div>)
export default NullComponent;
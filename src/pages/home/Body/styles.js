import Null from 'components/NullComponent';

const bodyText = { 
  fontFamily: "Crimson Text",
  fontWeight: 400,
  maxWidth: 700,
  fontSize: 'calc(10px + 1.5vw)',
  padding: '5vw'
};

const centerContainer = {
  display: 'flex',
  justifyContent: 'space-around',
};

const sectionHeader = {
  fontWeight: 600,
  fontSize: '7vw',
  color: 'black',
  fontFamily: 'Poppins'
};

const cardContainer = {
  ...centerContainer,
  paddingLeft: '5vw',
  paddingRight: '5vw',
  flexWrap: 'wrap'
};

const card = {
  width: '30vw',
  minWidth: 250,
  margin: '3vw'
};

export {
  bodyText,
  centerContainer,
  sectionHeader,
  cardContainer,
  card
};

// Gatsby requires a default export
// to be a component or string
export default Null;
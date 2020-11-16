import Null from 'components/NullComponent';
import { colors } from 'styles';

const border = {
  borderWidth: "20px",
  borderColor: "white",
  borderStyle: "solid",
};

const greetingContainer = {
  flex: 1,
  width: '100%',

  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
};

const greetingText = {
  color: "white",
  textAlign: "center",
  fontWeight: 600,
  fontSize: "7vw",
  fontFamily: "Poppins",
};

const faceBadgeContainer = {
  display: "flex", //Neccesary to keep the selfie a circle
  maxWidth: 300,
  maxHeight: 300,
  padding: '3vw'
};

const buttonContainer = {
  display: 'flex',
  justifyContent: "space-around",
  alignItems: "center",
  padding: '3vw'
};

const headerContainer = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: `linear-gradient(45deg, ${colors.pink} 10%, ${colors.orange} 95%)`
};

export {
  border,
  greetingContainer,
  greetingText,
  faceBadgeContainer,
  buttonContainer,
  headerContainer
};

// Gatsby requires a default export
// to be a component or string
export default Null;
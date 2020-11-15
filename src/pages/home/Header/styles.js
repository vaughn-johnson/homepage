import Null from 'components/NullComponent';
import { colors } from 'styles';

const border = {
  borderWidth: "1.5vw",
  borderColor: "white",
  borderStyle: "solid",
};

const header = {
  ...border,
  flex: 1,
  background: `linear-gradient(45deg, ${colors.pink} 10%, ${colors.orange} 95%)`,
  marginBottom: 50,

  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",

  borderTop: 0,
  borderLeft: 0,
  borderRight: 0,
};

const greeting = {
  color: "white",
  flex: 1,
  textAlign: "center",
  fontWeight: 600,
  fontSize: "7vw",
  fontFamily: "Poppins",
  padding: '1vw'
};

const faceBadgeContainer = {
  display: "flex", //Neccesary to keep the selfie a circle
  flex: 1,
  maxWidth: 300,
  maxHeight: 300,
};

const infoButtons = {
  flex: 1,
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

const infoButton = {
  flex: 1,
  color: colors.purple,
  fontFamily: "Poppins",
  justifyContent: "space-around",
  height: '3vw',
};

export {
  border,
  header,
  greeting,
  faceBadgeContainer,
  infoButtons,
  infoButton,
};

// Gatsby requires a default export
// to be a component or string
export default Null;
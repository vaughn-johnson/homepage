import Null from 'components/NullComponent';
import { colors } from 'styles';

const header = { 
  height: 'calc(5vw + 50px)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: `linear-gradient(45deg, ${colors.pink} 10%, ${colors.orange} 95%)`,
  paddingLeft: '3vw',
  paddingRight: '3vw',
  paddingTop: '1vw',
  paddingBottom: '1vw'
}

const infoButton = {
  flex: 1,
  color: colors.purple,
  fontFamily: "Poppins",
  fontSize: 'calc(1vw + 0.5em)',
  padding: 0,
};

const infoButtonChildContainer = {
  flex: 1,
  display: "flex",
  alignItems: 'center',
  paddingLeft: 'calc(5px + 3vw)',
  paddingRight: 'calc(5px + 3vw)',
  paddingTop: 'calc(5px + 0.5vw)',
  paddingBottom: 'calc(5px + 0.5vw)',
};

const blurryTextBox = {
  color: "white",
  textAlign: "center",
  fontWeight: 800,
  fontSize: "4.5vw",
  fontFamily: "Poppins",
  backdropFilter: 'blur(50px)',
  WebkitBackdropFilter: 'blur(70px)',
  margin: '7vw',
  padding: '1vw'
};

export {
  header,
  infoButton,
  infoButtonChildContainer,
  blurryTextBox,
};

// Gatsby requires a default export
// to be a component or string
export default Null;
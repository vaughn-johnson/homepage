import Null from 'components/NullComponent';
import { colors } from 'styles';

const image = {
  height: "calc(50px + 8vw)",
  width: "auto"
};

 const imageBackdrop = { 
  display: 'flex',
  margin: -3,
  background: `linear-gradient(45deg, ${colors.pink} , ${colors.orange})`,
};

 const footerContainer = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: 'auto'
};

export {
  image,
  imageBackdrop,
  footerContainer
}

export default Null;
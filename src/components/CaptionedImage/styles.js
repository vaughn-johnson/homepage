import { Null } from 'components';
import { colors } from 'styles';

const caption = {
  paddingLeft: '10%',
  paddingRight: '10%',

  color: colors.grey,
  fontFamily: 'Poppins',
  fontSize: '0.7em',
  textAlign: 'center',
  textIndet: 0
}

const image = {
  width: '100%'
}

const container = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

export {
  caption,
  container,
  image
}

// Gatsby requires a default export
// to be a component or string
export default Null;
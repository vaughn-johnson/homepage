import Null from 'components/NullComponent';
import { colors } from 'styles';

const errorMessage = {
  background: colors.orange,
  color: 'white',
  fontFamily: 'Poppins',
  fontWeight: 300,
  fontSize: '3em',
  textAlign: 'center',
  marginTop: '10%',
  marginBottom: '10%'
};

const loadingContainer = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around'
}

export {
  errorMessage,
  loadingContainer
};

export default Null;
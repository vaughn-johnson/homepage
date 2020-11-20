import { Null } from 'components';
import { colors } from 'styles';

const title = {
  fontFamily: 'Poppins',
  fontSize: 'calc(1.5em + 2vw)',
  fontWeight: 600,
  color: 'black',
  textIndent: 0,
  marginBottom: '2vw',
  hyphens: 'auto',
  WebkitHyphens: 'auto'
}

const subTitle = {
  fontFamily: 'Poppins',
  fontSize: 'calc(1.2em + 0.5vw)',
  fontWeight: 400,
  color: colors.grey,
  textIndent: 0,
  marginTop: 0,
  hyphen: 'auto',
  WebkitHyphens: 'auto'
}

const section = {
  maxWidth: '750px', 
  paddingLeft: '3vw',
  paddingRight: '3vw',
  fontFamily: 'Crimson Text',
  fontSize: 'calc(1.1em + 0.5vw)',
  textIndent: '3vw'
}

export {
  title,
  subTitle,
  section
}

// Gatsby requires a default export
// to be a component or string
export default Null;
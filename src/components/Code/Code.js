import React from 'react';
import { CopyBlock, solarizedDark } from "react-code-blocks";
import * as styles from './styles';
import PropTypes from "prop-types";

const Code = ({ text, inline = false, lang }) => {
  return (
    <div style={styles.container}>
      <CopyBlock
        text={text.replace(/^\n*/, '')}
        language={lang}
        theme={solarizedDark}
        codeBlock={inline}
        wrapLines
      />
    </div>
  );
};

Code.propTypes = {
  text: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  inline: PropTypes.bool,
};


export default Code; 
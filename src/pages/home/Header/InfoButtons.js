import React from "react";
import { ResumeButton, GithubButton, EmailButton } from "components/Header/InfoButtons";
import * as styles from "./styles";


const InfoButtons = () => {
  return (
    <div style={{ width: '100%' }}>
      <div style={{ ...styles.buttonContainer }}>
        <ResumeButton />
        <GithubButton />
        <EmailButton />
      </div>
    </div>
  );
};

export default InfoButtons;

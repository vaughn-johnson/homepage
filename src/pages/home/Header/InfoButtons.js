<<<<<<< HEAD
import React from "react";
import { ResumeButton, GithubButton, EmailButton } from "components/Header/InfoButtons";
import * as styles from "./styles";

=======
import React, { useState, useEffect } from "react";
import { ResumeButton, GithubButton, EmailButton } from "components/InfoButtons";
import * as styles from "./styles";
import { isMobile } from 'react-device-detect';

const SMOL_WINDOW = 900;
>>>>>>> fad95d1 (New resuable Header component (#8))

const InfoButtons = () => {
  return (
<<<<<<< HEAD
    <div style={{ width: '100%' }}>
      <div style={{ ...styles.buttonContainer }}>
        <ResumeButton />
        <GithubButton />
        <EmailButton />
      </div>
=======
    <div style={{ ...styles.infoButtons, flexDirection }}>
      <ResumeButton />

      <GithubButton />

      <EmailButton />
>>>>>>> fad95d1 (New resuable Header component (#8))
    </div>
  );
};

export default InfoButtons;

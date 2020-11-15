import React, { useState, useEffect } from "react";
import { ResumeButton, GithubButton, EmailButton } from "components/InfoButtons";
import * as styles from "./styles";
import { isMobile } from 'react-device-detect';

const SMOL_WINDOW = 900;

const InfoButtons = () => {
  const [aspectRatio, setAspectRatio] = useState(0);

  const handleResize = () => {
    setAspectRatio(window.innerWidth / window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  });

  const alignButtonsVertically = isMobile || aspectRatio < 1 || window.innerWidth < SMOL_WINDOW;

  const flexDirection = alignButtonsVertically ?  "column" : "row"; 

  return (
    <div style={{ ...styles.infoButtons, flexDirection }}>
      <ResumeButton />

      <GithubButton />

      <EmailButton />
    </div>
  );
};

export default InfoButtons;

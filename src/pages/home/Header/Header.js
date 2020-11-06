import React from "react";
import { header, greeting, faceBadgeContainer, border } from "./styles";
import FaceBadge from "./FaceBadge";
import InfoButtons from "./InfoButtons";

const Header = () => (
  <div style={header}>
    <div style={greeting}>{"Hi, I'm Vaughn!"}</div>

    <div style={faceBadgeContainer}>
      <FaceBadge style={{ ...border, transform: "translateY(20%)" }} />
    </div>

    <InfoButtons />
  </div>
);

export default Header;

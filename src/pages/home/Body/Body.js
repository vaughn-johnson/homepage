import React from "react";
import { bodyText } from "./styles";

const SIGNATURE_URL = "assets/images/signature.png";

const Body = () => (
  <div
    style={{
      flex: 1,
      overflow: "wrap",
    }}
  >
    <div style={bodyText}>
      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;Hi! I am a software developer and a trained
        statistician. I have years of experience working on a product
        obsessed team, and I have a background in linguistics and physics.
      </p>

      <p>
        &nbsp; &nbsp; &nbsp; &nbsp;I value simplicity, legibility, and maintainability, and I
        embody those values in my work. My passion is helping people make
        decisions based on evidence. 
      </p>
    </div>

    <img
      style={{ height: "100%", width: "100%" }}
      src={SIGNATURE_URL}
      alt="😉"
    />
  </div>
);

export default Body;

import React from "react";
import * as styles from "./styles";
import Card from './Card';
import Pills from 'assets/images/talkspace/pills.jpg';


const Body = () => (
  <div
    style={{
      flex: 1,
      overflow: "wrap"
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-around'}}>
      <div style={styles.bodyText}>
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp; Hi! I am a software developer and a trained
          statistician. I have years of experience working on a product
          obsessed team, and I have a background in linguistics and physics.
        </p>

        <p>
          &nbsp; &nbsp; &nbsp; &nbsp;I value simplicity, legibility, and maintainability, and I
          embody those values in my work. My passion is helping people make
          decisions based on evidence. 
        </p>
      </div>
    </div>
    <div>
      <div style={{ ...styles.centerContainer, width: '100%' }}>
        <div style={styles.sectionHeader}>
          Projects
        </div>
      </div>
      <div style={styles.cardContainer}>
        <Card
          image={Pills}
          title="Mining my own therapy data"
          body="I scrape, organize, visualize, and analyze my entire
          message history with my online therapist from the
          service Talkspace."
          href="/talkspace"
        />

        <Card
          image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80"
          title="Recursion, Explained"
          body="Finally, a concise and intutive explanation
          of recursion and what it really means. Click
          to gain hands on experience."
          href="/"
        />
      </div>
    </div>
  </div>
);

export default Body;

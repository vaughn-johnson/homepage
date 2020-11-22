import React from "react";
import * as styles from "./styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from "prop-types";

const CustomCard = ({ image, title, body, href }) => (
  <Card style={styles.card}>
    <CardActionArea href={href}>
      <CardMedia
        style={{ height: '20vw' }}
        image={image}
      />
      <CardContent>
        <h2 style={{ fontFamily: 'Poppins', fontSize: 'calc(10px + 2vw)' }}>
          {title}
        </h2>
        <p style={{ fontFamily: 'Crimson Text', fontSize: 'calc(10px + 1vw)' }}>
          {body} 
        </p>
      </CardContent>
    </CardActionArea>
  </Card>
);

CustomCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
  href: PropTypes.string
}

export default CustomCard 
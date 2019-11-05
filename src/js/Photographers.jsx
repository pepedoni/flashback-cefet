import React from "react";
import "../css/Photographers.scss";
import CardMedia from '@material-ui/core/CardMedia'
import { Grid } from "@material-ui/core";

const photographers = [
  {
    id: 1,
    name: "João Almeida",
    instagram_url: "https://www.instagram.com/joaoalmeidac/",
    url: "https://www.joaoalmeidac.com/"
  },
  {
    id: 2,
    name: "Jota",
    instagram_url: "https://www.instagram.com/jotarenan/",
    url: "https://www.joaoalmeidac.com/"
  },
];

export default class Photographers extends React.Component {

  render() {
    return (
      <div className="photographer-container">
        <div className="photographer-header">
          <span>Fotógrafos</span>
        </div>
        <div className="photographer-content">
          <Grid container alignContent="center" alignItems="center">
            {photographers.map((photographer, i) => (
                <Grid item xs={12} md={6} key={i}>
                    <a
                        href={photographer.url ? photographer.url : photographer.instagram_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <CardMedia
                            className="photographer-media"
                            image="/static/images/cards/paella.jpg"
                            title="Paella dish"
                        />
                        <span>{photographer.name}</span>
                    </a>
                </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

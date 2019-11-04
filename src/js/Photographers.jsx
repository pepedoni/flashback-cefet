import React from "react";
import "../css/Photographers.scss";
import CardMedia from '@material-ui/core/CardMedia';
import { Grid } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const photographers = [
  {
    id: 1,
    name: "João Almeida",
    instagram_url: "",
    instagram: "@joaoalmeidac"
  },
  {
    id: 2,
    name: "Jota",
    picture: "https://logos.pixieset.com/715072/e39ab3cf34824d51517e0fd57d21de31-small.jpg",
    site_url: "https://www.joaoalmeidac.com/",
    instagram_url: "",
    instagram: "@joaoalmeidac"
  }
];  

export default class Photographers extends React.Component {

  render() {

    return (
      <div className="photographers-container">
        <div className="photographers-header">
          <span>Fotografia</span>
        </div>
        <div className="photographers-content">
          <Grid container alignContent="center" alignItems="center">
                {photographers.map((photographer, i) =>{ return (
                    <Grid item xs={12} md={6} key={i}>
                        <Card class="photographers-photographer">
                            
                            <CardMedia
                                className="photographers-media"
                                image="https://logos.pixieset.com/715072/e39ab3cf34824d51517e0fd57d21de31-small.jpg"
                                title={photographer.name}
                            />

                            <CardContent>
                                <Typography component="p">
                                    {photographer.name}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )})}
          </Grid>
        </div>
      </div>
    );
  }
}

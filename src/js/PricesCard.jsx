import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles(theme => ({
  cardHeader: {
    backgroundColor: "#000",
    color: "#fff",
    border: "solid 1px #fff"
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(2)
  }
}));

const tiers = [
  {
    title: "1° Lote",
    price: "35"
  },
  {
    title: "2° Lote",
    price: "40"
  },
  {
    title: "3° Lote",
    price: "45"
  },
  {
    title: "4° Lote",
    price: "50"
  }
];

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Container component="main">
      <h3>Preços</h3>
      <Grid container spacing={5} alignItems="flex-end">
        {tiers.map(tier => (
          // Enterprise card is full width at sm breakpoint
          <Grid item key={tier.title} xs={12} sm={12} md={3}>
            <Card>
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: "center" }}
                subheaderTypographyProps={{ align: "center" }}
                className={classes.cardHeader}
              />
              <CardContent className="cards-price">
                <div className={classes.cardPricing}>
                  <Typography component="h2" variant="h3" color="textPrimary">
                    R${tier.price}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <CardActions>
          <Button className="btn-sale" size="small">
            <a
              href="https://www.sympla.com.br/flashback-cefet__697366"
              target="_blank"
            >
              Comprar
            </a>
          </Button>
        </CardActions>
      </Grid>
    </Container>
  );
}

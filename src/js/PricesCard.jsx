import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container spacing={2} alignItems="center">
        <Grid item xs={2} md={3}></Grid>
            <Grid item xs={8} md={3}>
            <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} component="h2" gutterBottom>
                    <ConfirmationNumberIcon/> <p class="price">  1° Lote: R$35,00</p>
                </Typography>
                <Typography className={classes.title} component="h2" gutterBottom>
                    <ConfirmationNumberIcon/> <p class="price">  2° Lote: R$40,00</p>
                </Typography>
                <Typography className={classes.title} component="h2" gutterBottom>
                    <ConfirmationNumberIcon/> <p class="price">  3° Lote: R$45,00</p>
                </Typography>
                <Typography className={classes.title} component="h2" gutterBottom>
                    <ConfirmationNumberIcon/> <p class="price">  4° Lote: R$50,00</p>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small"><a href="https://www.sympla.com.br/flashback-cefet__697366" target="_blank">Comprar</a></Button>
            </CardActions>
            </Card>
            </Grid>
        <Grid item xs={2} md={3}></Grid>
    </Grid>
  );
}
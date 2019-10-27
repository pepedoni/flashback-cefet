import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles(theme => ({

  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
}));

const tiers = [
  
  {
    title: '1° Lote',
    price: '35'
  },
  {
    title: '2° Lote',
    price: '40'
  },
  {
    title: '3° Lote',
    price: '45'
  },
  {
    title: '4° Lote',
    price: '50'
  },
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
                titleTypographyProps={{ align: 'center' }}
                subheaderTypographyProps={{ align: 'center' }}
                className={classes.cardHeader}
              />
              <CardContent>
                <div className={classes.cardPricing}>
                  <Typography component="h2" variant="h3" color="textPrimary">
                    R${tier.price}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
  </Container>
  );
}
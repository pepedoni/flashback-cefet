import React from "react";
import "../css/CountDown.css";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import * as moment from "moment";

export default class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingTime: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    };
    this.calculateRemainingTime = this.calculateRemainingTime.bind(this);
    this.timeout = null;
  }

  componentDidMount() {
    this.calculateRemainingTime();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  calculateRemainingTime() {
    var remainingTime = {};
    const partyDate = moment("2019-11-30T17:00:00-03:00");
    const currentDate = moment();
    const diffTime = moment.duration(partyDate - currentDate, "milliseconds");

    remainingTime.seconds = diffTime.seconds();
    remainingTime.minutes = diffTime.minutes();
    remainingTime.hours = diffTime.hours();
    remainingTime.days = Math.floor(diffTime.asDays());

    this.setState({ ...this.state, remainingTime });

    this.timeout = setTimeout(() => this.calculateRemainingTime(), 1000);
  }

  render() {
    return (
      <div>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={3}>
            <Card className="time-card">
              <CardContent className="time-card">
                <Typography variant="h4" className="time-card-time">
                  {this.state.remainingTime.days}
                </Typography>
                <Typography>Dias</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card className="time-card">
              <CardContent className="time-card">
                <Typography variant="h4" gutterBottom>
                  {this.state.remainingTime.hours}
                </Typography>
                <Typography>Horas</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card className="time-card">
              <CardContent className="time-card">
                <Typography variant="h4" gutterBottom>
                  {this.state.remainingTime.minutes}
                </Typography>
                <Typography>Minutos</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card className="time-card">
              <CardContent className="time-card">
                <Typography variant="h4" gutterBottom>
                  {this.state.remainingTime.seconds}
                </Typography>
                <Typography>Segundos</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

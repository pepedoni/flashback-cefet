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

    remainingTime.seconds = (diffTime.seconds().toString().length == 1) ? '0' + diffTime.seconds().toString() : diffTime.seconds().toString();
    remainingTime.minutes = (diffTime.minutes().toString().length == 1) ? '0' + diffTime.minutes().toString() : diffTime.minutes().toString();
    remainingTime.hours = (diffTime.hours().toString().length == 1) ? '0' + diffTime.hours().toString() : diffTime.hours().toString();
    remainingTime.days = (Math.floor(diffTime.asDays()).toString().length == 1) ? '0' + Math.floor(diffTime.asDays()).toString() : Math.floor(diffTime.asDays()).toString() ;

    this.setState({ ...this.state, remainingTime });

    this.timeout = setTimeout(() => this.calculateRemainingTime(), 1000);
  }

  render() {
    return (
      <div class="countdown">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={3} md={3} class="countdown-grid">
            <div class="countdown-time">
              {this.state.remainingTime.days}
            </div>
            <div class="countdown-type">
              Dias
            </div>
          </Grid>

          <Grid item xs={3} md={3} class="countdown-grid">
            <div class="countdown-time">
              {this.state.remainingTime.hours}
            </div>
            <div class="countdown-type">
              Horas
            </div>
          </Grid>

          <Grid item xs={3} md={3} class="countdown-grid">
            <div class="countdown-time">
              {this.state.remainingTime.minutes}
            </div>
            <div class="countdown-type">
              Minutos
            </div>
          </Grid>

          <Grid item xs={3} md={3} class="countdown-grid">
            <div class="countdown-time">
              {this.state.remainingTime.seconds}
            </div>
            <div class="countdown-type">
              Segundos
            </div>
          </Grid>

        </Grid>
      </div>
    );
  }
}

import React from "react";
import "../css/CountDown.scss";
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
    let remainingTime = {};
    const partyDate = moment("2019-11-30T17:00:00-03:00");
    const currentDate = moment();
    const diffTime = moment.duration(partyDate - currentDate, "milliseconds");

    remainingTime.seconds = diffTime
      .seconds()
      .toString()
      .padStart(2, "0");
    remainingTime.minutes = diffTime
      .minutes()
      .toString()
      .padStart(2, "0");
    remainingTime.hours = diffTime
      .hours()
      .toString()
      .padStart(2, "0");
    remainingTime.days = Math.floor(diffTime.asDays())
      .toString()
      .padStart(2, "0");

    this.setState({ ...this.state, remainingTime });

    this.timeout = setTimeout(() => this.calculateRemainingTime(), 1000);
  }

  renderItem(number, label) {
    return (
      <div className="countdown-item">
        <span className="countdown-item-number">{number}</span>
        <span className="countdown-item-label">{label}</span>
      </div>
    );
  }

  render() {
    return (
      <div className="countdown-container">
        <div className="countdown-header">
          <span className="seller-contact">
            <a
              href="https://www.sympla.com.br/flashback-cefet__697366"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/sympla-logo.png" alt="Whats app" /> Compre pelo Sympla
            </a>
          </span>
          <a
            href="https://open.spotify.com/playlist/6hNp3o2BPT7coXmf7tdN0W?si=R0mLtMn-S5aLnBzBOF3YMA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="Spotify Playlist"
              width="20"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png"
            />
          </a>
        </div>
        <div className="countdown-logo">
          <img src="/flshbck-logo.png" alt="Flashback CEFET logo" />
        </div>
        <div className="countdown-content">
          {this.renderItem(this.state.remainingTime.days, "Dias")}
          {this.renderItem(this.state.remainingTime.hours, "Horas")}
          {this.renderItem(this.state.remainingTime.minutes, "Minutos")}
          {this.renderItem(this.state.remainingTime.seconds, "Segundos")}
        </div>
        <div className="countdown-footer">
          <a href="#prices-page">
            <img src="/arrow.png" alt="Flashback CEFET arrow-down" />
            <span>mais informações</span>
            <span>
            <a href="https://www.youtube.com/watch?v=_snpkt5AAbs&t=" target="_blank">
              <span
                style={{
                  position: "fixed",
                  right: 4,
                  fontSize: 10,
                  bottom: 4
                }}
              >
                by Cardume
              </span>
            </a>
            </span>
          </a>
        </div>
      </div>
    );
  }
}

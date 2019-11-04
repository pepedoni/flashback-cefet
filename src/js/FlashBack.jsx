import React from "react";
import "../css/FlashBack.css";
import CountDown from "./CountDown";
import PartyMap from "./PartyMap";
import PricesCard from "./PricesCard";
import TweetsFlashback from "./TweetsFlashback";
import Photographers from "./Photographers";
import { AccessTime, AttachMoney, CameraAlt } from "@material-ui/icons";
import ReactGA from 'react-ga';

export default class FlaskBack extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.initializaGA();
  }

  initializaGA() {
    ReactGA.initialize('UA-112418672-3');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
        <div>

          <div className="side-menu">
            <a href="#countdown-page">
              <AccessTime fontSize="small" />
            </a>
            <a href="#prices-page">
              <AttachMoney fontSize="small" />
            </a>
            <a href="#twitter-page">
              <img src="/twitter-logo.png" width="18px"/>
            </a>
            <a href="#photographers-page">
              <CameraAlt fontSize="small" />
            </a>
          </div> 
        
          <div className="countdown-page" id="countdown-page">
            <CountDown />
          </div>
        
        
          <div className="prices-page" id="prices-page">
            <PricesCard />
          </div> 

          <div className="twitter-page" id="twitter-page">
            <TweetsFlashback />
          </div> 

          <div className="photographers-page" id="photographers-page">
            <Photographers/>
          </div>
        </div>
    );
  }

}

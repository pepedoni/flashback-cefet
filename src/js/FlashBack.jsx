import React from "react";
import "../css/FlashBack.css";
import CountDown from "./CountDown";
import PartyMap from "./PartyMap";
import PricesCard from "./PricesCard";
import TweetsFlashback from "./TweetsFlashback";
import { AccessTime, AttachMoney, Room } from "@material-ui/icons";

export default function FlaskBack(props) {
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
      
      </div>
  );
}

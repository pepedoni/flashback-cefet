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
          {
            /* 
              <a href="#map-page">
                <Room fontSize="small" />
              </a> 
            */
          }
        </div> 
      
    
        <div className="countdown-page" id="countdown-page">
          <CountDown />
        </div>
      
      
        <div className="prices-page" id="prices-page">
          <PricesCard />
        </div> 
      
        {
          /* 
          <TweetsFlashback />
            <section className="page-3" id="map-page">
              <PartyMap />
            </section> 
          */
        }
      </div>
  );
}

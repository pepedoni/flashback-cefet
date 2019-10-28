import React from "react";
import "../css/FlashBack.css";
import CountDown from "./CountDown";
import PartyMap from "./PartyMap";
import PricesCard from "./PricesCard";
import { AccessTime, AttachMoney, Room } from "@material-ui/icons";

export default function FlaskBack(props) {
  return (
    <>
      {/* <div className="side-menu">
        <a href="#countdown-page">
          <AccessTime fontSize="small" />
        </a>
        <a href="#prices-page">
          <AttachMoney fontSize="small  " />
        </a>
        <a href="#map-page">
          <Room fontSize="small" />
        </a>
      </div> */}
      <div className="countdown-page a" id="countdown-page">
        <CountDown />
      </div>
      {/* <section className="page-2" id="prices-page">
        <PricesCard />
      </section>
      <section className="page-3" id="map-page">
        <PartyMap />
      </section> */}
    </>
  );
}

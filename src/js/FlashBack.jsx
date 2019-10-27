import React from 'react';
import '../css/FlashBack.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Phone, Info, Room } from '@material-ui/icons';
import CountDown from './CountDown';
import PartyMap from './PartyMap';
import PricesCard from './PricesCard';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}


export default function FlaskBack(props)  {


    return (
      <React.Fragment>
        <ElevationScroll {...props}>
          <AppBar className="navbar-flashback">
            <Toolbar>
              <Typography className="menu-item" variant="h4">
                <Room/>
              </Typography>
              <Typography className="menu-item" variant="h4">
                <Info/>
              </Typography>
              <Typography className="menu-item" variant="h4">
                <Phone/>
              </Typography>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <section class="page-1">
          <CountDown/>  
        </section>
        <section class="page-2">
          <PricesCard/>
        </section>
        <section class="page-3">
            <PartyMap/>
        </section>
      </React.Fragment>
    );

}

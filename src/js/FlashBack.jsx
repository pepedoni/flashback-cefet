import React from 'react';
import '../css/FlashBack.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Phone, Info, Room } from '@material-ui/icons';
import CountDown from './CountDown';

export default class FlaskBack extends React.Component  {

  render() {
    return (
      <div className="App">
        <AppBar position="static">
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
        <CountDown/>
      </div>
    );
  }
}

import React from 'react';
import '../css/FlashBack.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CountDown from './CountDown';

export default class FlaskBack extends React.Component  {

  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography className="menu-item" variant="h4">
              Atrações
            </Typography>
            <Typography className="menu-item" variant="h4">
              Contatos
            </Typography>
          </Toolbar>
        </AppBar>
        <CountDown/>
      </div>
    );
  }
}

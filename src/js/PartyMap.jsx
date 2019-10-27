import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../css/PartyMap.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const style = {
    width: '50%',
    height: '50%'
  }

export class PartyMap extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
        }
    } 

    render() {
        return (
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={8} md={3}>
                    <Map google={this.props.google}
                        zoom={18}
                        style={style}
                        initialCenter={{ lat: -19.834889, lng: -44.014472}}
                        >
                        <Marker
                            title={'The marker`s title will appear as a tooltip.'}
                            name={'Resenha'}
                            position={{lat: -19.834889, lng: -44.014472}} />
                    </Map>
                </Grid>
            </Grid>
        );
      }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDJe3WBxKcL4CVM5aZaEdkNOb3zdS2IHv4',
    language: 'pt-br'
})(PartyMap);
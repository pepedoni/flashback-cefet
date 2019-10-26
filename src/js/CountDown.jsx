import React from 'react';
import '../css/CountDown.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
    } 
    
    componentDidMount() {
       this.calculateRemainingTime();
    }

    calculateRemainingTime() {
        var remainingTime = {};
        let diffTime = 0;
        let dateResenha = new Date(2019, 10, 31, 17, 0, 0, 0);
        let dataAtual = new Date();
        diffTime  = ( Math.abs(dateResenha - dataAtual) ) / 1000;
        
        remainingTime.seconds = parseInt( diffTime % 60 );
        diffTime /= 60;

        remainingTime.minutes = parseInt( diffTime % 60 );
        diffTime /= 60;

        remainingTime.hours = parseInt( diffTime % 24 );
        remainingTime.days = parseInt( diffTime / 24 );
        
        this.setState({ ...this.state, remainingTime: remainingTime});
        
        setTimeout(() => this.calculateRemainingTime(), 1000);
        
    }

    render() {
        return (
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={3}>
                    <Card className="time-card">
                        <CardContent className = "time-card">
                            <Typography variant="h4" className="time-card-time">
                                { this.state.remainingTime.days} 
                            </Typography>
                            <Typography>
                                Dias
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                
                <Grid item xs={12} md={3}>
                    <Card className="time-card">
                        <CardContent className = "time-card">
                            <Typography variant="h4" gutterBottom>
                                { this.state.remainingTime.hours} 
                            </Typography>
                            <Typography>
                                Horas
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={3}>  
                    <Card className="time-card">
                        <CardContent className = "time-card">
                            <Typography variant="h4" gutterBottom>
                                { this.state.remainingTime.minutes} 
                            </Typography>
                            <Typography>
                                Minutos
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={3}>     
                    <Card className="time-card">
                        <CardContent className = "time-card">
                            <Typography variant="h4" gutterBottom>
                                { this.state.remainingTime.hours} 
                            </Typography>
                            <Typography>
                                Segundos
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        );
    }
}

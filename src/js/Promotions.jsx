import React from "react";
import Grid from '@material-ui/core/Grid';
import "../css/Promotions.scss";
import { TwitterTweetEmbed, TwitterHashtagButton } from "react-twitter-embed";

export default class Promotions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweetsFlashback: []
        };
    }

    openAlbum(album) {
        switch(album) {
            case 1:
                window.open("https://photos.google.com/u/1/share/AF1QipOAfeGBcdXSgPLKmFxRKQGVpH4TCOE9PI8Fe7C5H2RNbNjvT7PO6GVMZaZvSCQ5Og?key=aUNKNVJpMVVjZTlRS3Q1eDJnNDYtZUhvVFhkSVRn", "_blank");
                break;
        }
    }

    render() {
        return (

            <div className="content-flex">
                <p className="intro">Promoção</p>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <div className='promotion-card'>
                            <span>1 ingresso para o melhor flashback utilizando #MEUFLASHBACK <TwitterHashtagButton tag="MEUFLASHBACK" className="btn-twitter"/></span>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className='promotion-card'>
                            <span>1 ingresso sorteado entre os tweets com #FLASHBACKCEFET <TwitterHashtagButton tag="FLASHBACKCEFET" className="btn-twitter"/></span>
                        </div>
                    </Grid>
                </Grid>
                <p className="intro">Relembre suas historias com as fotos abaixo</p>
                <Grid container alignItems="center">
                    <Grid item xs={12} md={6}>
                        <div className="resenha radioactive" />
                        <div className="resenha radioactive2" />
                        <div className="resenha festt" />
                        <div className="resenha sunrise" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className="resenha check-in"/>
                        <div className="resenha check-out"/>
                        <div className="resenha decreto" />
                        <div className="resenha decreto" />
                    </Grid>
                </Grid>
                <div className="content-imgs-promotion">
                    {/* <div className="imgs-promotion">
                        <img src="IMG_2310.jpg" alt="" width="200px" height="200px"/>
                    </div>
                    <div className="imgs-promotion">
                        <img src="IMG_2310.jpg" alt="" width="200px" height="200px"/>
                    </div>
                    <div className="imgs-promotion">
                        <img src="IMG_2310.jpg" alt="" width="200px" height="200px"/>
                    </div>
                    <div className="imgs-promotion">
                        <img src="IMG_2310.jpg" alt="" width="200px" height="200px"/>
                    </div> */}
                </div>
            </div>
        );
    }

}
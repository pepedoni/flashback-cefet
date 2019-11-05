import React from "react";
import "../css/TweetsFlashback.css";
import TweetJs from "../util/tweetjs";
import Divider from '@material-ui/core/Divider';
import { TwitterTweetEmbed, TwitterHashtagButton } from "react-twitter-embed";
import { Grid } from "@material-ui/core";
import Image from 'material-ui-image';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

export default class TweetsFlashback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweetsFlashback: []
        };
    }

    componentWillMount() {
        this.getTweetsByHashtag();
    }

    getTweetsByHashtag() {
        TweetJs.Search("#FLASHBACKCEFET", tweets=> {
            const filteredTweets = tweets.statuses.filter(tweet=>{
                return !tweet.hasOwnProperty("retweeted_status");
            });
            this.setState({
                tweetsFlashback: filteredTweets
            });
        });
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
            <div>
                <Grid container alignContent="center" alignItems="center">
                    <Grid item xs={12} md={5} className="promotion">
                        <p className="intro">Promoção</p>
                        <p class="text-left">
                            1 Ingresso para a melhor história utilizando #FLASHBACKCEFET
                            <br></br>
                            1 Ingresso sorteado entre os tweets com #FLASHBACKCEFET
                        </p>
                        <p>
                            Resultados: 16/11
                        </p>
                        <br></br>
                        <p className="intro">Relembre Suas Histórias</p>
                        <Grid container>
                            <Grid item xs={12} md={5}>
                                <Image
                                    src="./IMG_2310.jpg"
                                    onClick={() => this.openAlbum(1)}
                                    aspectRatio={(9/9)}
                                    className="promotion-album"
                                />
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Image
                                    src="./IMG_2310.jpg"
                                    onClick={() => this.openAlbum(2)}
                                    aspectRatio={(9/9)}
                                    className="promotion-album"
                                />
                            </Grid>
                        </Grid>
                        <Grid container >
                            <Grid item xs={12} md={5}>
                                <Image
                                    src="./IMG_2310.jpg"
                                    onClick={() => console.log('onClick')}
                                    aspectRatio={(9/9)}
                                    className="promotion-album"
                                />
                            </Grid>
                            <Grid item xs={12} md={5}>
                                <Image
                                    src="./IMG_2310.jpg"
                                    onClick={() => console.log('onClick')}
                                    aspectRatio={(9/9)}
                                    className="promotion-album"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={1} className="promotion">
                        <Divider light={true} orientation="vertical" />
                    </Grid>
                    <Grid item xs={12} md={5} alignItems="center" className="content-tweets">
                        <p className="intro"> Veja o que as pessoas estão falando sobre o evento</p>
                        <TwitterHashtagButton tag="FLASHBACKCEFET" className="btn-twitter"/>
                        <div className="tweets">
                            {
                                this.state.tweetsFlashback.map( tweet => 
                                    <TwitterTweetEmbed
                                        key={tweet.id}  
                                        tweetId={tweet.id_str}
                                    /> 
                                )
                            }
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }

}
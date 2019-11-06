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
            <div className="content-flex">
                <div className="content-tweets">
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
                </div>
            </div>
        );
    }

}
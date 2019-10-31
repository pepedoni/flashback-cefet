import React from "react";
import "../css/TweetsFlashback.css";
import TweetJs from "../util/tweetjs";
import {TwitterTweetEmbed, TwitterHashtagButton} from "react-twitter-embed";

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

    render() {
        return (
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
        );
    }

}
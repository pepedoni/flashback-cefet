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
            {/* <a
                href="https://twitter.com/intent/tweet?hashtags=FLASHBACKCEFET"
                target="_blank"
                className="twiter-link"
                rel="noopener noreferrer"
            >
                Tweet com #FLASHBACKCEFET
            </a> */}
                <TwitterHashtagButton tag="FLASHBACKCEFET" />
                <div className="tweets">
                    {
                        this.state.tweetsFlashback.map( tweet => 
                            <TwitterTweetEmbed
                                tweetId={tweet.id_str}
                            /> 
                        )
                    }
                </div>
            </div>
        );
    }

}
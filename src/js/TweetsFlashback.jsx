import React from "react";
import "../css/TweetsFlashback.css";
import TweetJs from "../util/tweetjs";
import {TwitterTweetEmbed} from "react-twitter-embed";

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
            <div class="content-tweets">
                <div class="tweets">
                    {
                        this.state.tweetsFlashback.map( tweet => 
                            <TwitterTweetEmbed
                                tweetId={tweet.id_str}
                            /> 
                        )
                    }
                </div>
                <img src="/arrow.png" class="down" alt="Flashback CEFET arrow-down"></img>
            </div>
        );
    }

}
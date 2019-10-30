import React from "react";
import Container from "@material-ui/core/Container";
import { TwitterTimelineEmbed } from 'react-twitter-embed'

export default class Twitter extends React.Component {

    render() {
        
        return (
            <Container component="main">
                <TwitterTimelineEmbed sourceType="url" url="https://twitter.com/search?q=%23FLASHBACKCEFET&src=typeahead_click" options={{height: 400}} />
            </Container>
        );
    }
}

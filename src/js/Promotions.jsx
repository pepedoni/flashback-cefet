import React from "react";
import "../css/TweetsFlashback.css";

export default class TweetsFlashback extends React.Component {
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
                <div className="resenhas">
                    <div className="resenha radioactive" />
                    <div className="resenha radioactive2" />
                    <div className="resenha festt" />
                    <div className="resenha sunrise" />
                    <div className="resenha check-in"/>
                    <div className="resenha check-out"/>
                    <div className="resenha decreto" />
                </div>
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
                    <p className="intro"> Promoção pipipi popopo ganha um ingresso pipipi popopo</p>
                </div>
            </div>
        );
    }

}
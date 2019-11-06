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
                    <div className="resenha"></div>
                    {/* <img className="resenha" src="radioactive.jpg" alt=""/>
                    <img className="resenha" src="radioactive2.jpeg" alt=""/>
                    <img className="resenha" src="festt.jpg" alt=""/>
                    <img className="resenha" src="sunrise.jpg" alt=""/>
                    <img className="resenha" src="check-in.jpg" alt=""/>
                    <img className="resenha" src="check-out.jpg" alt=""/>
                    <img className="resenha" src="decreto.jpg" alt=""/> */}
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
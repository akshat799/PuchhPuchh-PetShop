import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import "./footer.css";
export default function Footer() {
    return (
        <div className="header-container">
            <div className="social-media">
                <a href = "https://www.facebook.com/puchhpuchh1">
                    <FacebookIcon style={{color: "aliceblue"}}/>
                </a>
                <a href="https://www.instagram.com/puchhpuchh1/">
                    <InstagramIcon style={{color: "aliceblue"}}/>
                </a>
                <a href="https://twitter.com/puchhpuchh1">
                    <TwitterIcon style={{color: "aliceblue"}} />
                </a>
                <a href="mailto:support@puchhpuchh.com">
                <EmailIcon style={{color: "aliceblue"}} />
                </a>
            </div>
            <div>
            <LocationOnIcon style={{color: "aliceblue" , position: "absolute"}} />
            <h6 style={{color: "aliceblue" , position: "relative" , paddingLeft: "22px" , marginTop: "2px"}}>UNIT NO 7, 117 KEARNEY LAKE ROAD, HALIFAX, NS CANADA B3M4N9</h6>
            </div>
            <div>
                <PhoneIcon style={{color: "aliceblue" , position: "absolute"}} />
                <h6 style={{color: "aliceblue" , position: "relative" , paddingLeft: "22px" , marginTop: "2px"}}>+1 (902)-435-8557 (ANURAG GULATI)</h6>
            </div>
            

        </div>
    )
}

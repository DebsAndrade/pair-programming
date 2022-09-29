import React from "react";
import Instagram from "../../assets/image/instagramm.png";
import Twitter from "../../assets/image/twitterr.png";
import Facebook from "../../assets/image/ffacebook.png";
import Pinterest from "../../assets/image/pinterestt.png";

const SocialNetworks = () => {
    return (
        <section>
            <img src={Instagram} alt="Logo do Instagram" />
            <img src={Twitter} alt="Logo do Twitter" />
            <img src={Facebook} alt="Logo do Facebook" />
            <img src={Pinterest} alt="Logo do Pinterest" />
            <nav>
                <ul>
                    <li>ABOUT</li>
                    <li>RECIPES</li>
                    <li>SUBSCRIBE</li>
                </ul>
            </nav>
        </section>
    )
}

export default SocialNetworks;
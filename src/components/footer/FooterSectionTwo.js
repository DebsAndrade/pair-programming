import React from "react";
import Instagram from "../../assets/image/instagramm.png";
import Twitter from "../../assets/image/twitterr.png";
import Facebook from "../../assets/image/ffacebook.png";
import Pinterest from "../../assets/image/pinterestt.png";
import * as S from "../../styles/FooterSectionTwoStyle";

const SocialNetworks = () => {
    return (
        <S.BoxSection>
            <S.SectionNav>
                <S.BoxSocialNetworks>
                    <S.Image src={Instagram} alt="Logo do Instagram" />
                    <S.Image src={Twitter} alt="Logo do Twitter" />
                    <S.Image src={Facebook} alt="Logo do Facebook" />
                    <S.Image src={Pinterest} alt="Logo do Pinterest" />
                </S.BoxSocialNetworks>
                <nav>
                    <ul>
                        <S.LiFooter>ABOUT</S.LiFooter>
                        <S.LiFooter>RECIPES</S.LiFooter>
                        <S.LiFooter>SUBSCRIBE</S.LiFooter>
                    </ul>
                </nav>
            </S.SectionNav>
            <S.Div>
                <S.P>Layout produzido por Débora Andrade e Nikolas Caetano para fins exclusivamente educacionais do curso de Front-End Vai na Web. Referência: https://br.pinterest.com/pin/AVuDlMAl4GsQiM6nijH9YbG9bsNKpompSEOEHzig6GJ58AnUtMkSy7k/</S.P>
            </S.Div>
        </S.BoxSection>
    )
}

export default SocialNetworks;
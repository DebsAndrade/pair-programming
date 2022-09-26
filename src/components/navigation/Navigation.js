import React from "react";
import Logo from "../../assets/image/RC.png";
import * as S from "../../styles/NavigationStyle";

const Navigation = () => {
    return (
        <S.HeaderNavigation>
            <S.LogoHeader src={Logo} alt="Logomarca Restaurante"/>
            <nav>
                <ul>
                    <S.ItemList>ABOUT</S.ItemList>
                    <S.ItemList>RECIPES</S.ItemList>
                    <S.ItemList>SUBSCRIBE</S.ItemList>
                </ul>
            </nav>
        </S.HeaderNavigation> 
    )
}

export default Navigation;
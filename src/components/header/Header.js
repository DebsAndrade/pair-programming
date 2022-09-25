import React from "react";
import Navigation from "../navigation/Navigation";
import * as S from "../../styles/HeaderStyle";

const Header = () => {
    return (
        <S.Header>
            <Navigation />
            <S.H1>RECIPES</S.H1>
        </S.Header>
    )
}

export default Header;

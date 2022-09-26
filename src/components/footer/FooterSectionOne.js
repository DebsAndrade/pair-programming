import React from "react";
import * as S from "../../styles/FooterSectionOneStyle"

const Forms = () => {
    return (
        <S.Box>
            <S.Title>SUBSCRIBE</S.Title>
            <S.Text>Sing up for newslatter</S.Text>
            <S.Input type="email" placeholder="Your Email"/>
            <S.Button>SUBMIT</S.Button>
        </S.Box>
    )
}

export default Forms;
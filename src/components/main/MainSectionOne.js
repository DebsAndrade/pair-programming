import React from "react";
import RedVelvetCake from "../../assets/image/RedVelvetCake.png";
import PizzaMargherita from "../../assets/image/pizza.png";
import PeanutSmoothie from "../../assets/image/vitaminaAmendoin.png";
import * as S from "../../styles/MainSectionOneStyle"

const MainSectionOne = () => {
    return (
        <S.Box>
            <S.H2>LATEST RECIPES</S.H2>
            <S.H3></S.H3>
            <S.Caixa>
                <S.Card>
                    <S.Image src={RedVelvetCake} alt="Bolo Red Velvet" />
                    <h3></h3>
                    <S.Text>Red Velvet Cake</S.Text>
                </S.Card>
                <S.Card>
                    <S.Image src={PizzaMargherita} alt="Pizza de Margherita" />
                    <S.Text>Margherita Pizza</S.Text>
                </S.Card>
                <S.Card>
                    <S.Image src={PeanutSmoothie} alt="Peanut Smoothie" />
                    <S.Text>Peanut Smoothie</S.Text>
                </S.Card>
            </S.Caixa>
        </S.Box>
    )
}

export default MainSectionOne;
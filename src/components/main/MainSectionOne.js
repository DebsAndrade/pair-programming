import React from "react";
import RedVelvetCake from "../../assets/image/RedVelvetCake.png";
import PizzaMargherita from "../../assets/image/pizza.png";
import PeanutSmoothie from "../../assets/image/vitaminaAmendoin.png";

const MainSectionOne = () => {
    return (
        <>
            <h2>LATEST RECIPES</h2>
            <div></div>
            <div>
                <img src={RedVelvetCake} alt="Bolo Red Velvet"/>
                <div></div>
                <p>Red Velvet Cake</p>
            </div>
            <div>
                <img src={PizzaMargherita} alt=""/>
                <div></div>
                <p>Margherita Pizza</p>
            </div>
            <div>
                <img src={PeanutSmoothie} alt=""/>
                <div></div>
                <p>Peanut Smoothie</p>
            </div>
        </>
    )
}

export default MainSectionOne;
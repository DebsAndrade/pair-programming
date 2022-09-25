import React from "react";
import Logo from "../../assets/image/RC.png"

const Navigation = () => {
    return (
        <div>
            <img src={Logo} alt="Logomarca Restaurante"/>
            <nav>
                <ul>
                    <li>ABOUT</li>
                    <li>RECIPES</li>
                    <li>SUBSCRIBE</li>
                </ul>
            </nav>
        </div> 
    )
}

export default Navigation;
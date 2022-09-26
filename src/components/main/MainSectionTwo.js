import React from "react";
import ColherSal from "../../assets/image/colhersal.png";
import * as S from "../../styles/MainSectionTwoStyle"

const MainSectionTwo = () => {
    return (
        <S.Box>
            <S.Image src={ColherSal} alt="Uma colher com sal do Himalaia" />
            <S.Card>
                <h2>ABOUT</h2>
                <S.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt, 
                    tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero 
                    velit sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend 
                    tincidunt, nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. 
                    Nam interdum, nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum 
                    quam augue id mauris. Pellentesque mattis hendrerit semper. Orci varius natoque 
                    penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut vestibulum
                    nisl ante, et ultricies sapien facilisis aliquam.</S.Text>
            </S.Card>
        </S.Box>
    )
}

export default MainSectionTwo;
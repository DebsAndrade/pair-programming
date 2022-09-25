import styled from "styled-components";

export const HeaderNavigation = styled.div`
    height: 4.22vw;
    padding-inline: 5.05vw 4.58vw;
    display: flex;
    justify-content: space-between;
`;

export const LogoHeader = styled.img`
    width: 3.54vw;
    height: 3.18vw;
    margin-block: auto;
`;

export const ItemList = styled.li`
    display: inline-block;
    line-height: 4.22vw;
    padding-inline: 2.29vw;
`;

export const ActiveItem = styled(ItemList)`
    border: solid 5px #373737;
    padding-inline: 3.13vw;
    margin-left: 2.29vw;
`;
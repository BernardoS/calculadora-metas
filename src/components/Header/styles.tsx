import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../utils/layoutBreakpoints";

export const HeaderContainer = styled.div`
    background-color: var(--main-color);
    display: flex;
    justify-content: center;
    width: 100%;
    height: 120px;
    border-bottom: 2px solid var(--border-default);
`;

export const HeaderContent = styled.div`
    display: flex;
    width: 100%;
    max-width: 1200px;
    padding: 32px;
    box-sizing: border-box;
`;

export const DesktopContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;

    @media ${device.tablet} {
        display: none;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
`
export const LogoImage = styled.img`
    height: 84px;
    width: auto;
`;

export const NavBar = styled.nav`
    display: flex;
    gap:16px;
`

export const NavItem = styled(Link)`
    font-family:'Montserrat', Helvetica, sans-serif;
    font-weight: 700;
    font-size: 24px;
    color: var(--txt-light);
    text-decoration: none;
    border-bottom:0px solid transparent;
    transition:0.2s;
    box-sizing: border-box;
    height: 35px;
    &:hover{
        border-bottom:3px solid var(--txt-light);
    }
`

export const MobileContent = styled.div`
    display: none;
    
    @media ${device.tablet} {
        display: flex;
        width: 100%;
    }
`;

export const MenuButtonContainer =styled.div`
    position: absolute;
    display: flex;
    width:20%;
    align-items:center ;
    justify-content: flex-start;

    button{
        aspect-ratio: 1;
        background-color: var(--bg-default);
        box-shadow: 5px 5px 0px -2px rgba(26,26,26,1);
        -webkit-box-shadow: 5px 5px 0px -2px rgba(26,26,26,1);
        -moz-box-shadow: 5px 5px 0px -2px rgba(26,26,26,1);
        border-radius: 8px;
        border:2px solid var(--border-default);
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            height: 32px;
        }
    }
`;

export const MobileLogoContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const DrawerContainer = styled.div`
    display: none;

    &.open{
        z-index: 999;
        position: fixed;
        top:0;
        left: 0;
        width: 100dvw;
        height: 100dvh; 
        background-color:rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: flex-start;
    }
`;

export const DrawerContent = styled.div`

    width: 0%; 
    height: 100vh;
    background-color:var(--main-color);
    padding: 20px;
    border-top-right-radius: 8px;
    border-right: 2px solid var(--border-default);
    box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
    -webkit-box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
    -moz-box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
    

    &.open{
        animation: show-menu 0.2s ease-in-out alternate;
        width: 80%;
    }
`

export const DrawerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    padding: 16px 0px;
`;

export const DrawerLogo = styled.img`

`;

export const CloseButtonContainer =styled.div`
    align-self: center;
    justify-self: center;
    position: absolute;
    right: 0;
`;
export const DrawerCloseButton = styled.button`
    aspect-ratio: 1;
    background-color: var(--bg-default);
    box-shadow: 5px 5px 0px -2px rgba(26,26,26,1);
    -webkit-box-shadow: 5px 5px 0px -2px rgba(26,26,26,1);
    -moz-box-shadow: 5px 5px 0px -2px rgba(26,26,26,1);
    border-radius: 8px;
    border:2px solid var(--border-default);
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        height: 32px;
    }

    &:active{
        opacity: 0.8;
        scale: 0.95;
    }
`

export const DrawerOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap:8px;
`

export const DrawerOption = styled(Link)`
    background-color: var(--bg-default);
    box-shadow: 5px 5px 0px -2px rgba(26,26,26,1);
    -webkit-box-shadow: 5px 5px 0px -2px rgba(26,26,26,1);
    -moz-box-shadow: 5px 5px 0px -2px rgba(26,26,26,1);
    border-radius: 8px;
    border:2px solid var(--border-default);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 16px 16px;
    gap: 16px;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    color:var(--main-color);
    
    &:active{
        opacity: 0.8;
        scale: 0.95;
    }
`
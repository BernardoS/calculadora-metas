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
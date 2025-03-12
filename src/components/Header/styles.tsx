import { Link } from "react-router-dom";
import styled from "styled-components";

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
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    max-width: 1200px;
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
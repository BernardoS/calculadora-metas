import { Link } from "react-router-dom";
import styled from "styled-components";
import MessyDoodleLight from "../../assets/images/messy-doodle-light.svg";


export const HomeContainer = styled.div`
    background-color: var(--bg-blue);
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 100dvh;
`

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    padding: 32px;
`

export const Banner = styled.div`
    display: flex;
    background-color: var(--bg-default);
    border: 2px solid var(--border-default);
    border-radius: 8px;
    padding: 8px 80px;
    box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
    -webkit-box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
    -moz-box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
    transition: 0.2s;
    &:hover{
        scale: 1.005;
    }
`
export const BannerInfoSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 50%;
`
export const BannerInfoText = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        color:#4169E1;
        font-weight: bold;
        font-size: 48px;;
    }
    h2{
        font-weight: 400;
        font-size: 16px;
    }
`

export const BannerAction = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 16px 0px;
`
export const BannerActionLink = styled(Link)`
    padding: 16px 32px;
    background-color: var(--main-color);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap:16px;
    border-radius: 10px;
    border:2px solid var(--border-default);
    color: var(--txt-light);
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
    box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
    -webkit-box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
    -moz-box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
    transition: 0.2s;

    &:hover{
        scale: 1.05;
    }
`;

export const BannerImageSection = styled.section`
    background-image:url(${MessyDoodleLight});
    background-size: object-fit;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    width: 50%;
    height:85%;
    align-self: center;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
`
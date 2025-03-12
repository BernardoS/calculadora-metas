import { Link } from "react-router-dom";
import styled from "styled-components";
import MessyDoodleLight from "../../assets/images/messy-doodle-light.svg";
import { device } from "../../utils/layoutBreakpoints";


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
    box-sizing: border-box;
`

export const Banner = styled.div`
    display: flex;
    background-color: var(--bg-default);
    border: 2px solid var(--border-default);
    border-radius: 8px;
    padding: 32px 80px;
    box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
    -webkit-box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
    -moz-box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
    transition: 0.2s;

    @media ${device.tablet} {
       flex-direction : column-reverse;
    }

    @media ${device.mobile}{
       padding: 8px 16px;
    }
`
export const BannerInfoSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;

    @media ${device.tablet} {
        text-align: center;
        width: 100%;
        align-items: center;
    }
`
export const BannerInfoText = styled.div`
    display: flex;
    flex-direction: column;
    margin: 16px 0px 32px;
    h1{
        color:#4169E1;
        font-weight: bold;
        font-size: 48px;
        margin:16px 0px;
        transition: 0.2s ease-in-out;
        &:hover{
            scale: 1.05;
        }
    }
    h2{
        font-weight: 400;
        font-size: 16px;
        margin:unset;
    }

    @media ${device.laptop} {
        h1{
            font-size: 32px;
        }
        h2{
            font-size: 14px;
        }
    }
    @media ${device.mobile}{
        h1{
            font-size: 24px;
        }
        h2{
            font-size: 16px;
        }
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

    img{
        width: 24px;
        height: 24px;
    }

    &:hover{
        scale: 1.05;
    }

    @media ${device.laptop} {
        font-size: 14px;
        gap:8px;
        img{
            width: 20px;
            height: 20px;
        }

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

    &:hover{
        animation: shake-banner 0.5s ease-in-out alternate;
    }

    @media ${device.tablet} {
        width: 80%;
        min-height: 198px;
        aspect-ratio: 2 / 1;
    }

    @media ${device.mobile} {
        width: 80%;
        aspect-ratio: 2 / 1;
    }
`
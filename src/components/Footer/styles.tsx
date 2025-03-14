import styled from "styled-components";
import { device } from "../../utils/layoutBreakpoints";

export const FooterContainer = styled.div`
    width: 100%;
    background-color: var(--main-color);
    border-top: 2px solid var(--border-default);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FooterContent = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 32px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5%;
    color: var(--txt-light);
    @media ${device.mobile} {
        flex-direction: column;
    }
`

export const InfoSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 30%;

    h3{
        font-size: 24px;
        margin: unset;
        margin-bottom: 32px;
    }
    p{
        font-size: 16px;
        margin: unset;
        margin-bottom: 8px;
        font-weight: 600;
        a{
            text-decoration: underline;
            color: inherit;
        }
    }

    @media ${device.mobile} {
        margin-top: 32px;
        width: 100%;
        text-align: center;
        h3{
            font-size: 20px;
        }
        p{
            font-size: 14px;
        }
    }
`;

export const LogoSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 30%;
    @media ${device.mobile} {
        display: none;
    }
`;

export const LogoSectionMobile =  styled.section`
    display: none;

    @media ${device.mobile} {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
    }
    
`;

export const ContactSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 30%;
    text-align: right;
    h3{
        font-size: 24px;
        margin: unset;
        margin-bottom: 32px;
    }
    p{
        font-size: 16px;
        margin: unset;
        margin-bottom: 8px;
        font-weight: 600;
        a{
            text-decoration: underline;
            color: inherit;
        }
    }
    @media ${device.mobile} {
        margin-top: 16px;
        width: 100%;
        text-align: center;
        h3{
            font-size: 20px;
        }
        p{
            font-size: 14px;
        }
    }
`;
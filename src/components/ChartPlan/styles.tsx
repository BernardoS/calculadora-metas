import styled from "styled-components";
import { device } from "../../utils/layoutBreakpoints";

export const ChartPlanContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

`

export const ChartPlanTitle = styled.h2`
    margin:unset;
    font-size: 32px;
    color: var(--main-color);
    text-align: center;
    margin-top:32px;
    margin-bottom: 24px;
`

export const ChartBox = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 64px;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 10px 10px 0px -2px rgba(26,26,26,0.7);
    -webkit-box-shadow: 10px 10px 0px -2px rgba(26,26,26,0.7);
    -moz-box-shadow: 10px 10px 0px -2px rgba(26,26,26,0.7);
    border:2px solid var(--border-default);
   

    @media ${device.mobile} {
        margin: 0 8px;
        overflow-x:scroll; 
    }
`;

export const ChartContainer = styled.div`
    display: flex;
    height: 400px;
    width: 100%;

    @media ${device.mobile} {
        width: 700px;
        padding-left: 450px;
    }

`;
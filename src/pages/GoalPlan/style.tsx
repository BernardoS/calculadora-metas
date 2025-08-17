import styled from "styled-components";
import { device } from "../../utils/layoutBreakpoints";

export const GoalPlanContainer = styled.div`
    background-color: var(--bg-blue);
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 100dvh;
    padding-bottom:32px;
`
export const GoalPlanContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    padding: 32px;
    box-sizing: border-box;
`

export const PlanBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    background-color: var(--main-color);
    border: 2px solid var(--border-default);
    border-radius: 8px;
    padding: 32px 80px;
    box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
    -webkit-box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
    -moz-box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);

    @media ${device.mobile} {
        padding: 16px;
        gap: 8px;
    }
`

export const GoalPlanTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    h2{
        text-align: center;
        font-size: 24px;
        color:var(--txt-light);
        b{
            font-size: 32px;
            color:var(--bg-default);
        }
    }
`

export const GoalPlanActions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    @media ${device.tablet} {
        flex-direction: column;
        align-items: center;
        gap: 16px;
        margin-bottom: 16px;
    }
`;

export const GoalPlanButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-default);
    color: var(--main-color);
    border-radius: 8px;
    border: 2px solid var(--border-default);
    font-weight: bold;
    padding: 16px 32px;
    font-size: 18px;
    cursor: pointer;
    box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
    -webkit-box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
    -moz-box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
    transition: all 0.3s ease-in-out;
    gap: 8px;
    width: 32%;
    &:hover{
        scale: 1.05;
    }
    &.active{
        background-color:var(--main-color);
        color: var(--txt-light);
    }

    @media ${device.tablet} {
        width: 100%;
    }
`;

export const PlanBoxContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    background-color: var(--bg-default);
    border-radius: 8px;
    padding: 16px;
    border: 2px solid var(--border-default);
    width: 100%;
    box-sizing: border-box;
    box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
    -webkit-box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
    -moz-box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
`;

export const StepFooter = styled.div`
    display: flex;
    padding: 0 64px;
    width: 100%;
    box-sizing: border-box;

    &.first-step{
        justify-content: flex-end;
    }
    
    &.second-step{
        justify-content: space-between;
    }
    
    &.third-step{
        justify-content: flex-start;
    }

    @media ${device.laptop} {
         &.first-step{
            justify-content: center;
        }
    }

    @media ${device.laptop} {
        padding: 16px;
    }
`

export const StepButton = styled.button`
    margin-top: 32px;
    padding: 16px 32px;
    background-color: var(--main-color);
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: end;
    justify-content: center;
    gap:16px;
    border-radius: 10px;
    border:2px solid var(--border-default);
    color: var(--txt-light);
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
    box-shadow: 10px 10px 0px -2px rgba(26,26,26,0.7);
    -webkit-box-shadow: 10px 10px 0px -2px rgba(26,26,26,0.7);
    -moz-box-shadow: 10px 10px 0px -2px rgba(26,26,26,0.7);
    transition: 0.2s;
    cursor: pointer;
    width: 70%;
    max-width: 250px;

    img{
        width: 24px;
        height: 24px;
    }

    &:hover{
        scale: 1.05;
    }

    &:active{
        scale: 0.9;
    }

    @media ${device.laptop} {
        width: 100%;;
    }

`;

import styled from "styled-components";
import { device } from "../../utils/layoutBreakpoints";

export const GoalStepsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-bottom: 16px;
`
export const GoalStepsContent = styled.div`
    display: flex;
    flex-direction: row;
    gap:64px;

    @media ${device.tablet} {
       gap:24px;
    }
`
export const GoalStepsSection = styled.section<{ "data-theme"?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1/1;
    width: 42px;
    border-radius: 50%;
    background-color:  var(--bg-blue);
    color: transparent;
    border-radius: 50%;
    transition: background-color cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.5s;
    z-index: 2;
    font-weight: bold;

    &.active{
        background-color: ${({ "data-theme": theme }) => theme === "light" ? "var(--bg-default)" : "var(--main-color)"};
        color: ${({ "data-theme": theme }) => theme === "light" ? "var(--main-color)" : "var(--txt-light)"} ;
    }
    
`

export const GoalStepProgressBar = styled.div`
    position: absolute;
    height: 8px;
    width: 100%;
    background-color: var(--bg-blue);
    top: calc(50% - 4px);
    z-index: 1;
`

export const GoalStepProgress = styled.div<{ "data-theme"?: string }>`
    height: 8px;
    width: 0%;
    background-color: ${({ "data-theme": theme }) => theme === "light" ? "var(--bg-default)" : "var(--main-color)"};
    border-radius: 4px;
    position: relative;
    z-index: 2;
    transition: width 0.5s;
` 


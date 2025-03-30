import styled from "styled-components";

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
`;
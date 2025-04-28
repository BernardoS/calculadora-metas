import styled from "styled-components";

export const GenericPlanContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap:32px;
`

export const GenericPlanTitle = styled.h2`
    margin:unset;
    font-size: 32px;
    color: var(--main-color);
    text-align: center;
`

export const GenericPlanSection = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 0 64px;
`

export const GenericPlanSectionLabel = styled.span`
    font-size: 32px;
    color: var(--main-color);
    font-weight: 700;
    width:50%;
`

export const GenericPlanSectionValue = styled.div`
    display: flex;
    background-color: var(--bg-default);
    border-radius: 8px;
    padding: 16px;
    border: 2px solid var(--border-default);
    box-sizing: border-box;
    box-shadow: 10px 10px 0px -2px rgba(26,26,26,0.7);
    -webkit-box-shadow: 10px 10px 0px -2px rgba(26,26,26,0.7);
    -moz-box-shadow: 10px 10px 0px -2px rgba(26,26,26,0.7);
    text-align: right;
    font-size: 32px;
    color: var(--main-color);
    font-weight: 700;
    b{  
        font-weight: 700;
        font-size:24px;
        color: var(--main-color-darker);
        .year{
            font-size: 32px;
        }
    }
`;
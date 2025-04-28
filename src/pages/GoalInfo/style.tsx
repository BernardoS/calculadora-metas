import { Field, Form } from "formik";
import styled from "styled-components";

export const GoalInfoContainer = styled.div`
    background-color: var(--bg-blue);
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 100dvh;
    padding-bottom:32px;
`
export const GoalInfoContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    padding: 32px;
    box-sizing: border-box;
`

export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    background-color: var(--bg-default);
    border: 2px solid var(--border-default);
    border-radius: 8px;
    padding: 32px 80px;
    box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
    -webkit-box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
    -moz-box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
`

export const FormContainer = styled.div`
    display: flex;
`

export const GoalForm = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 100%;  
`;
export const GoalFormBody = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;  
`;

export const GoalFormFooter = styled.section`
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;  
    gap:16px;
`

export const GoalFormFieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;
    border: none;
    min-height: 500px;

    h2{
        text-align: center;
        font-size: 24px;
        color:var(--main-color);
        b{
            font-size: 32px;
            color:var(--main-color-darker);
        }
    }
    label{
        font-size: 16px;
        margin: 16px 0px;
        b{
            font-weight: 500;
            font-size: 14px;
            opacity: 0.5;
        }
    }
    &.disabled-step{
        opacity: 0.5;
        scale: 0.95;
        pointer-events: none;
    }
`

export const GoalFormField = styled(Field)`
    border: 2px solid var(--border-default);
    border-radius: 10px;
    padding: 16px 32px;
    font-family: 'Montserrat', Helvetiva, sans-serif;
`

export const GoalFormButton = styled.button`
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
    cursor: pointer;
    width: 70%;

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

`;

export const GoalFormSecondaryButton = styled.button`
    padding: 16px 32px;
    background-color: var(--bg-default);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap:16px;
    border-radius: 10px;
    border:2px solid var(--border-default);
    color: var(--main-color);
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
    box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
    -webkit-box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
    -moz-box-shadow: 10px 10px 0px -2px rgba(26,26,26,1);
    transition: 0.2s;
    cursor: pointer;
    width: 70%;

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

`;

export const GoalFormDivider = styled.div`
    height:100%;
    width: 2px;
    border: none;
    margin:0px 32px;
    background-color: var(--border-default);
`

export const ErrorText = styled.p`
    margin: 0;
    color: red;
    font-size: 12px;
`
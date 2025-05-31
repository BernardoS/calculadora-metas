import styled from "styled-components";

export const TablePlanContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

`

export const TablePlanTitle = styled.h2`
    margin:unset;
    font-size: 32px;
    color: var(--main-color);
    text-align: center;
    margin-top:32px;
    margin-bottom: 24px;
`

export const Table = styled.table`
    width:100%;
    border-radius: 8px;
    border-spacing:0;
    color: var(--main-color);
    font-size: 18px;
    font-weight: 500;
    background-color: var(--bg-wthite); 
    box-shadow: 10px 10px 0px -2px rgba(26,26,26,0.7);
    -webkit-box-shadow: 10px 10px 0px -2px rgba(26,26,26,0.7);
    -moz-box-shadow: 10px 10px 0px -2px rgba(26,26,26,0.7);
    border:2px solid var(--border-default);
    padding-bottom: 32px;

    tr{
        text-align: center;
        height: 32px;
    }
    th{
        height: 48px;
        color: var(--main-color-darker);
    }
    td {
        b{
            color: var(--main-color-darker);
        }
    }


`;
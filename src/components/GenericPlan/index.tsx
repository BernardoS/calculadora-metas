import { useEffect, useState } from "react";
import { GenericPlanContainer, GenericPlanSection, GenericPlanSectionLabel, GenericPlanSectionValue, GenericPlanTitle } from "./styles";
import { useGoal } from "../../contexts/GoalContext";


const GenericPlan = () => {

    const [monthlyAmount, setMonthlyAmount] = useState('0,00');
    const [totalAmount, setTotalAmount] = useState('0,00');
    const [lastYear, setLastYear] = useState('');
    const [lastMonthLabel, setLastMonthLabel] = useState('');
    const {goal} = useGoal();

    useEffect(() => {
        console.log("Goal in GenericPlan:", goal);
        if(!goal) {
            setMonthlyAmount('0,00');
            setTotalAmount('0,00');
            return;
        }

        if (goal.monthlyAmount !== undefined){
            setMonthlyAmount(goal.monthlyAmount.toFixed(2).replace('.', ','));
        }

        if(goal.finalQuantity !== undefined && typeof goal.finalQuantity === 'number') {
            setTotalAmount(goal.finalQuantity.toFixed(2).replace('.', ','));
        }

        if(goal.lastYear !== undefined) {
            setLastYear(goal.lastYear);
        }

        if(goal.lastMonthLabel !== undefined) {
            setLastMonthLabel(goal.lastMonthLabel);
        }

    },[goal]);

    return (
        <GenericPlanContainer>
            <GenericPlanTitle>Planejamento geral</GenericPlanTitle>
            <GenericPlanSection>
                <GenericPlanSectionLabel>Você precisa de</GenericPlanSectionLabel>
                <GenericPlanSectionValue>
                    <span>R$ {monthlyAmount} </span>  
                    <b>por <span className="month" >mês</span></b>
                </GenericPlanSectionValue>
            </GenericPlanSection>
            <GenericPlanSection>
                <GenericPlanSectionLabel>para alcançar (aproximadamente)</GenericPlanSectionLabel>
                <GenericPlanSectionValue>
                    <span>R$ {totalAmount} <b>em {lastMonthLabel} de <span className="year" >{lastYear}</span></b></span>
                </GenericPlanSectionValue>
            </GenericPlanSection>
        </GenericPlanContainer>
    );
}

export default GenericPlan;
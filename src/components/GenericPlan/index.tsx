import { useEffect, useState } from "react";
import { GenericPlanContainer, GenericPlanSection, GenericPlanSectionLabel, GenericPlanSectionValue, GenericPlanTitle } from "./styles";
import { useGoal } from "../../contexts/GoalContext";


const GenericPlan = () => {

    const [monthlyAmount, setMonthlyAmount] = useState('0,00');
    const [totalAmount, setTotalAmount] = useState('0,00');
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
    },[goal]);

    return (
        <GenericPlanContainer>
            <GenericPlanTitle>Planejamento geral</GenericPlanTitle>
            <GenericPlanSection>
                <GenericPlanSectionLabel>Você precisa de</GenericPlanSectionLabel>
                <GenericPlanSectionValue>
                    <span>R$ {monthlyAmount} <b>por <span className="month" >mês</span></b></span>
                </GenericPlanSectionValue>
            </GenericPlanSection>
            <GenericPlanSection>
                <GenericPlanSectionLabel>para alcançar</GenericPlanSectionLabel>
                <GenericPlanSectionValue>
                    <span>R$ {totalAmount} <b>em dezembro de <span className="year" >2025</span></b></span>
                </GenericPlanSectionValue>
            </GenericPlanSection>
        </GenericPlanContainer>
    );
}

export default GenericPlan;
import { useState } from "react";
import { GenericPlanContainer, GenericPlanSection, GenericPlanSectionLabel, GenericPlanSectionValue, GenericPlanTitle } from "./style";


const GenericPlan = () => {

    const [monthlyAmount, setMonthlyAmount] = useState('270,00');
    const [totalAmount, setTotalAmount] = useState('3000,00');

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
import { useEffect, useState } from "react";
import { useGoal } from "../../contexts/GoalContext";
import { Table, TablePlanContainer, TablePlanTitle } from "./styles";

const TablePlan = () => {

    const [monthList, setMonthList] = useState<string[]>([]);
    const [monthlyProgress, setMonthlyProgress] = useState<string[]>([]);
    const [monthlyAmount, setMonthlyAmount] = useState<string>('');

    const {goal} = useGoal();

    useEffect(() => {
        console.log("Goal in TablePlan:", goal);
        if(!goal) {
            setMonthList([]);
            setMonthlyProgress([]);
            setMonthlyAmount('');
            return;
        }

        if (goal.monthsList !== undefined){
            setMonthList(goal.monthsList);
        }

        if (goal.monthlyProgress !== undefined){
            const formattedProgress = goal.monthlyProgress.map(amount => `R$ ${amount.toFixed(2).replace('.', ',')}`);
            setMonthlyProgress(formattedProgress);
        }

        if (goal.monthlyAmount !== undefined){
            setMonthlyAmount(`R$ ${goal.monthlyAmount.toFixed(2).replace('.', ',')}`);
        }


    },[goal]);

    return (
        <TablePlanContainer>
            <TablePlanTitle>Tabela de planejamento</TablePlanTitle>
            <Table>
                <thead>
                    <tr>
                        <th>Mês</th>
                        <th>Quantidade mensal</th>
                        <th>Quantidade acumulada</th>
                    </tr>
                </thead>
                <tbody>
                    {monthList.length > 0 && monthlyProgress.length > 0 ? (
                        monthList.map((month, index) => (
                            <tr key={index}>
                                <td data-title="Mês"><b>{month}</b></td>
                                <td data-title="Quantidade mensal">{monthlyAmount}</td>
                                <td data-title="Quantidade acumulada" >{monthlyProgress[index]}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={3} style={{ textAlign: 'center', marginTop:'24' }}>Nenhum dado disponível</td>
                        </tr>
                    )}
                </tbody>

            </Table>
        </TablePlanContainer>
    );
}

export default TablePlan;
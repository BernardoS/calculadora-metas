import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend, BarElement } from 'chart.js';
import { ChartBox, ChartContainer, ChartPlanContainer, ChartPlanTitle } from './styles';
import { useEffect, useState } from 'react';
import { useGoal } from '../../contexts/GoalContext';
import { IChartData } from '../../interfaces/IChartData';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);


const ChartPlan = () => {

    const [labels, setLabels] = useState<string[]>([]);
    const [monthMoneyAmount, setMonthMoneyAmount] = useState<string[]>([]);
    const [data, setData] = useState<IChartData | undefined> (undefined);

    const { goal } = useGoal();

    const options = {
    responsive: true,
        plugins: {
            legend: {
                position: 'bottom' as const,
                display: true,
            },
            title: {
                display: false,
                text: 'Progresso do plano',
            },
        },
    };

    useEffect(() => {
        if (!goal) {
            setLabels([]);
            setMonthMoneyAmount([]);
            return;
        }

        if (goal.monthsList !== undefined) {
            setLabels(goal.monthsList);
        }

        if (goal.monthlyProgress !== undefined) {
            const formattedProgress = goal.monthlyProgress.map(amount => amount.toFixed(2).toString());
            setMonthMoneyAmount(formattedProgress);
        }

    }, [goal]);

    useEffect(() => {
        
        if (labels.length > 0 && monthMoneyAmount.length > 0) {
            const chartData: IChartData = {
                labels: labels,
                datasets: [
                    {
                         label: 'Dinheiro acumulado',
                        data: monthMoneyAmount.map((value) => parseFloat(value)),
                        borderColor: '#2A4BAA',
                        backgroundColor: '#4169E1',
                        stepped: false
                    },
                ],
            };
            setData(chartData);
        } else {
            setData(undefined);
        }
    }, [labels, monthMoneyAmount]);



    return (
        <ChartPlanContainer>
            <ChartPlanTitle>
                Gráfico de evolução do plano
            </ChartPlanTitle>
            
            <ChartBox>
                {!data ? (
                    <p>Carregando...</p>
                ) : (
                    <ChartContainer>
                        <Bar options={options} data={{
                                                labels: data.labels,
                                                datasets: data.datasets
                                            }} />
                    </ChartContainer>
                )}
            </ChartBox>

        </ChartPlanContainer>
    );
}

export default ChartPlan;
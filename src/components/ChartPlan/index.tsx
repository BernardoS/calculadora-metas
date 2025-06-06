import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { ChartContainer, ChartPlanContainer, ChartPlanTitle } from './styles';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
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

const labels = ['01/2025', '02/2025', '03/2025', '04/2025', '05/2025'];
const monthMoneyAmount = ['270.00', '540.00', '810.00', '1080.00', '1350.00'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dinheiro acumulado',
            data: monthMoneyAmount.map((value) => parseFloat(value)),
            borderColor: '#2A4BAA',
            backgroundColor: '#4169E1',
            stepped: true
        }
    ],
};

const ChartPlan = () => {
    return (
        <ChartPlanContainer>
            <ChartPlanTitle>
                Gráfico de evolução do plano
            </ChartPlanTitle>
            <ChartContainer>
                <Line options={options} data={data} />
            </ChartContainer>

        </ChartPlanContainer>
    );
}

export default ChartPlan;
import { Table, TablePlanContainer, TablePlanTitle } from "./styles";

const TablePlan = () => {
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
                    <tr>
                        <td><b>01/2025</b></td>
                        <td>R$ 270,00</td>
                        <td>R$ 270,00</td>
                    </tr>
                    <tr>
                        <td><b>02/2025</b></td>
                        <td>R$ 270,00</td>
                        <td>R$ 540,00</td>
                    </tr>
                    <tr>
                        <td><b>03/2025</b></td>
                        <td>R$ 270,00</td>
                        <td>R$ 810,00</td>
                    </tr>
                    <tr>
                        <td><b>04/2025</b></td>
                        <td>R$ 270,00</td>
                        <td>R$ 1080,00</td>
                    </tr>
                    <tr>
                        <td><b>05/2025</b></td>
                        <td>R$ 270,00</td>
                        <td>R$ 1350,00</td>
                    </tr>
                </tbody>

            </Table>
        </TablePlanContainer>
    );
}

export default TablePlan;
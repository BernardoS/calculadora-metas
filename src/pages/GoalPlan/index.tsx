import Footer from "../../components/Footer";
import GoalSteps from "../../components/GoalSteps";
import Header from "../../components/Header";
import PigWhite from "../../assets/icons/pig-white.svg";
import PigBlue from "../../assets/icons/pig-blue.svg";
import TableWhite from "../../assets/icons/table-white.svg";
import TableBlue from "../../assets/icons/table-blue.svg";
import ChartWhite from "../../assets/icons/chart-white.svg";
import ChartBlue from "../../assets/icons/chart-blue.svg";
import {
    GoalPlanActions,
    GoalPlanButton,
    GoalPlanContainer,
    GoalPlanContent,
    GoalPlanTitle,
    PlanBox
} from "./style";
import { useState } from "react";

type PlanType = "generic-plan" | "chart-plan" | "table-plan";

const GoalPlan = () => {

    const [selectedTab, setSelectedTab] = useState<PlanType>("generic-plan");

    return (
        <>
            <Header />
            <GoalPlanContainer>
                <GoalPlanContent>
                    <PlanBox>
                        <GoalSteps step={3} theme="light" />
                        <GoalPlanTitle>
                            <h2><b>III</b><br />Descubra o quanto precisa poupar</h2>
                        </GoalPlanTitle>
                        <GoalPlanActions>
                            <GoalPlanButton className={selectedTab === "generic-plan" ? "active" : ""} onClick={() => setSelectedTab("generic-plan")}>
                                Planejamento geral
                                <img src={selectedTab === "generic-plan" ? PigWhite : PigBlue} alt="ícone de porquinho" />
                            </GoalPlanButton>
                            <GoalPlanButton className={selectedTab === "table-plan" ? "active" : ""} onClick={() => setSelectedTab("table-plan")}>
                                Tabela de planejamento
                                <img src={selectedTab === "table-plan" ? TableWhite : TableBlue} alt="ícone de porquinho" />
                            </GoalPlanButton>
                            <GoalPlanButton className={selectedTab === "chart-plan" ? "active" : ""} onClick={() => setSelectedTab("chart-plan")}>
                                Gráfico de evolução
                                <img src={selectedTab === "chart-plan" ? ChartWhite : ChartBlue} alt="ícone de porquinho" />
                            </GoalPlanButton>
                        </GoalPlanActions>
                    </PlanBox>
                </GoalPlanContent>
            </GoalPlanContainer>
            <Footer />
        </>
    )
}

export default GoalPlan;
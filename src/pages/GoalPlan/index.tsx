import Footer from "../../components/Footer";
import GoalSteps from "../../components/GoalSteps";
import Header from "../../components/Header";
import PigWhite from "../../assets/icons/pig-white.svg";
import PigBlue from "../../assets/icons/pig-blue.svg";
import TableWhite from "../../assets/icons/table-white.svg";
import TableBlue from "../../assets/icons/table-blue.svg";
import ChartWhite from "../../assets/icons/chart-white.svg";
import ChartBlue from "../../assets/icons/chart-blue.svg";
import RightIcon from "../../assets/icons/right.svg";
import LeftIcon from "../../assets/icons/left.svg";
import {
    GoalPlanActions,
    GoalPlanButton,
    GoalPlanContainer,
    GoalPlanContent,
    GoalPlanTitle,
    PlanBox,
    PlanBoxContent,
    StepButton,
    StepFooter
} from "./style";
import { useState } from "react";
import GenericPlan from "../../components/GenericPlan";
import TablePlan from "../../components/TablePlan";
import ChartPlan from "../../components/ChartPlan";

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
                        <PlanBoxContent>
                            {selectedTab === "generic-plan" && (<>
                                <GenericPlan />
                                <StepFooter className="first-step">
                                    <StepButton type="button" onClick={() => setSelectedTab("table-plan")}>
                                        Próximo passo <img src={RightIcon} alt="ícone de próximo passo" />
                                    </StepButton>
                                </StepFooter>

                            </>)}
                            {selectedTab === "table-plan" && (<>
                                <TablePlan />
                                <StepFooter className="second-step">
                                    <StepButton type="button" onClick={() => setSelectedTab("generic-plan")}>
                                        Passo Anterior <img src={LeftIcon} alt="ícone de passo anterior" />
                                    </StepButton>
                                    <StepButton type="button" onClick={() => setSelectedTab("chart-plan")}>
                                        Próximo passo <img src={RightIcon} alt="ícone de próximo passo" />
                                    </StepButton>
                                </StepFooter>

                            </>)}
                            {selectedTab === "chart-plan" && (<>
                                <ChartPlan />
                                <StepFooter className="third-step">
                                    <StepButton type="button" onClick={() => setSelectedTab("table-plan")}>
                                        Passo Anterior <img src={LeftIcon} alt="ícone de próximo passo" />
                                    </StepButton>
                                </StepFooter>
                            </>)}

                        </PlanBoxContent>

                    </PlanBox>
                </GoalPlanContent>
            </GoalPlanContainer>
            <Footer />
        </>
    )
}

export default GoalPlan;
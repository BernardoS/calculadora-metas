import Goal from "../models/Goal";

interface IGoalPlan {
    goal?: Goal;
    getMonthsLabel(): string[];
    getMonthlyProgress(): number[];
    getMonthlyAmount(): number;
    getTotalAmount(): number;
}

export default IGoalPlan; 
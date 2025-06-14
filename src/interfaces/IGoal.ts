interface IGoal {
    initialQuantity?: number;
    finalQuantity?: number;
    initialDate?: string;
    finalDate?: string;
    growthRate?: number;
    monthsList?: string[];
    monthlyProgress?: number[];
}

export default IGoal; 
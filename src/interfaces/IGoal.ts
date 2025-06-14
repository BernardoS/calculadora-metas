interface IGoal {
    initialQuantity?: number;
    finalQuantity?: number;
    initialDate?: string;
    finalDate?: string;
    growthRate?: number;
    monthsList?: string[];
    monthlyAmount?: number;
    monthlyProgress?: number[];
}

export default IGoal; 
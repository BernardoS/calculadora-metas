interface IGoal {
    initialQuantity?: number;
    finalQuantity?: number;
    initialDate?: string;
    finalDate?: string;
    growthRate?: number;
    monthsList?: string[];
    monthlyAmount?: number;
    monthlyProgress?: number[];
    lastYear?: string;
    lastMonthLabel?: string;
    getLastMonthAmount?: () => number;
}

export default IGoal; 
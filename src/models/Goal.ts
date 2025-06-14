import  IGoal  from '../interfaces/IGoal';


class Goal implements IGoal{
    initialQuantity?: number;
    finalQuantity?: number;
    initialDate?: string;
    finalDate?: string;
    growthRate?: number;
    monthsList?: string[];
    monthlyAmount?: number;
    monthlyProgress?: number[];

    

    constructor(initialQuantity: string, finalQuantity: string, initialDate?: string, finalDate?: string, growthRate?: number) {
        
        console.log("Creating Goal with parameters:", {
            initialQuantity,
            finalQuantity,
            initialDate,
            finalDate,
            growthRate
        });

        this.initialQuantity = (initialQuantity !== null || initialQuantity !== undefined) ? Number.parseFloat(initialQuantity): 0.0;
        console.log("Initial Quantity:", this.initialQuantity);
        this.finalQuantity = (finalQuantity !== null || finalQuantity !== undefined) ? Number.parseFloat(finalQuantity): 0.0;
        console.log("Final Quantity:", this.finalQuantity);
        this.initialDate = initialDate;
        this.finalDate = finalDate;
        this.growthRate = growthRate;

        this.generateMonthsList();
        console.log("Months List:", this.monthsList);

        this.monthlyAmount =  this.calculateMonthlyAmount();
        console.log("Monthly Amount:", this.monthlyAmount);

        this.monthlyProgress = this.calculateMonthlyProgress();
        console.log("Monthly Progress:", this.monthlyProgress);
    }


    private generateMonthsList() {
        if (!this.initialDate || !this.finalDate) return;

        const startDate = new Date(this.initialDate);
        const endDate = new Date(this.finalDate);
        const months: string[] = [];

        // eslint-disable-next-line prefer-const
        let currentDate = new Date(startDate.getFullYear(), (startDate.getMonth()+1), 1);

        while (
            currentDate.getFullYear() < endDate.getFullYear() ||
            (currentDate.getFullYear() === endDate.getFullYear() && currentDate.getMonth() <= endDate.getMonth())
        ) {
            const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
            const year = currentDate.getFullYear();
            months.push(`${month}/${year}`);
            currentDate.setMonth(currentDate.getMonth() + 1);
        }

        this.monthsList = months; 
    }

    private calculateMonthlyAmount(): number {
        console.log("Calculating Monthly Amount with:", {
            initialQuantity: this.initialQuantity,
            finalQuantity: this.finalQuantity,
            monthsList: this.monthsList
        });
        
        if (this.initialQuantity == undefined || this.finalQuantity == undefined  || this.monthsList == undefined) {
            console.error("Missing parameters for monthly amount calculation.");
            return 0;
        }

        const totalMonths = this.monthsList.length;
        const totalAmount = this.finalQuantity - this.initialQuantity;

        const monthlyAmount = totalMonths > 0 ? totalAmount / totalMonths : 0;

        const monthlyAmountFormated =  this.formatMonthtlyAmount(monthlyAmount);

        return monthlyAmountFormated;
    }

    private calculateMonthlyProgress(): number[] {
        if (!this.monthsList || !this.monthlyAmount) return [];

        const progress: number[] = [];
        for (let i = 0; i < this.monthsList.length; i++) {

            const monthlyProgress = this.formatMonthtlyAmount(this.monthlyAmount * (i + 1));

            progress.push(monthlyProgress);
        }
        return progress;
    }

    private formatMonthtlyAmount(monthlyAmount:number): number {
       const monthlyAmountFormated = monthlyAmount.toFixed(2) == "NaN" ? 0 : Number(monthlyAmount.toFixed(2));
       return monthlyAmountFormated;
    }
   
    public getLastMonthAmount(): number {
        if (!this.monthlyProgress || this.monthlyProgress.length === 0) {
            return 0;
        }
        return this.monthlyProgress[this.monthlyProgress.length - 1];
    }
}

export default Goal;
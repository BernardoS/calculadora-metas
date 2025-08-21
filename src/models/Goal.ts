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
    lastYear?: string;
    lastMonthLabel?: string;

    

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

        this.monthsList = this.generateMonthsList();// Ajustar o método para validar mês negativo
        console.log("Months List:", this.monthsList);

        this.monthlyAmount =  this.calculateMonthlyAmount();
        console.log("Monthly Amount:", this.monthlyAmount);

        this.monthlyProgress = this.calculateMonthlyProgress();
        console.log("Monthly Progress:", this.monthlyProgress);

        this.lastYear = this.getLastYear();
        console.log("Last Year:", this.lastYear);

        this.lastMonthLabel = this.getLastMonthLabel();
        console.log("Last Month Label:", this.lastMonthLabel);
    }


    private generateMonthsList(): string[] | undefined {
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
        
        console.log("Generated Months:", months);

        return months;
    }

    private calculateMonthlyAmount(): number {
        console.log("Calculating Monthly Amount with:", {
            initialQuantity: this.initialQuantity,
            finalQuantity: this.finalQuantity,
            monthsList: this.monthsList,
            growthRate: this.growthRate
        });
        
        if (this.initialQuantity == undefined || this.finalQuantity == undefined || this.monthsList == undefined) {
            console.error("Missing parameters for monthly amount calculation.");
            return 0;
        }

        const totalMonths = this.monthsList.length;
        const finalValue = this.finalQuantity - this.initialQuantity;

        let monthlyAmount = 0;

        if (this.growthRate && this.growthRate > 0) {
            // converte de % para decimal
            const i = this.growthRate / 100; 
            monthlyAmount = (finalValue * i) / (Math.pow(1 + i, totalMonths) - 1);
        } else {
            // cálculo simples (sem juros)
            monthlyAmount = totalMonths > 0 ? finalValue / totalMonths : 0;
        }

        return this.formatMonthtlyAmount(monthlyAmount);
    }


    private calculateMonthlyProgress(): number[] {
        if (!this.monthsList || !this.monthlyAmount) return [];

        const progress: number[] = [];
        let saldo = this.initialQuantity ?? 0;
        const i = this.growthRate ? this.growthRate / 100 : 0; // conversão %

        for (let month = 0; month < this.monthsList.length; month++) {
            // adiciona a contribuição mensal
            saldo = saldo + this.monthlyAmount;

            // aplica o rendimento do mês
            if (i > 0) {
                saldo = saldo * (1 + i);
            }

            progress.push(this.formatMonthtlyAmount(saldo));
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

    public getLastYear(): string {
        if (!this.monthsList || this.monthsList.length === 0) {
            return '';
        }
        const lastMonth = this.monthsList[this.monthsList.length - 1];
        return lastMonth.split('/')[1]; // Retorna o ano do último mês
    }

    public getLastMonthLabel(): string {
        if (!this.monthsList || this.monthsList.length === 0) {
            return '';
        }
        const lastMonth = this.monthsList[this.monthsList.length - 1];
        const lastMonthNumber = lastMonth.split('/')[0]; 

        switch (lastMonthNumber) {
            case '01': return 'Janeiro';
            case '02': return 'Fevereiro';
            case '03': return 'Março';
            case '04': return 'Abril';
            case '05': return 'Maio';
            case '06': return 'Junho';
            case '07': return 'Julho';
            case '08': return 'Agosto';
            case '09': return 'Setembro';
            case '10': return 'Outubro';
            case '11': return 'Novembro';
            case '12': return 'Dezembro';
            default: return '';
        }
    }
}


export default Goal;
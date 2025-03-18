import { GoalStepProgress, GoalStepProgressBar, GoalStepsContainer, GoalStepsContent, GoalStepsSection } from "./styles";

interface GoalStepsProps{
    theme:string,
    step:number
}

const GoalSteps = ({step,theme}:GoalStepsProps) => {

    const progress = (step-1)*100/2;

    return (
        <GoalStepsContainer>
           <GoalStepsContent>
                <GoalStepsSection data-theme={theme} className={step>=1?"active":""}>I</GoalStepsSection>
                <GoalStepsSection data-theme={theme} className={step>=2?"active":""}>II</GoalStepsSection>
                <GoalStepsSection data-theme={theme} className={step==3?"active":""}>III</GoalStepsSection>
           </GoalStepsContent>
           <GoalStepProgressBar>
            <GoalStepProgress data-theme={theme} style={{width:`${progress}%`}}/>
           </GoalStepProgressBar>
        </GoalStepsContainer>
    )
}

export default GoalSteps;   
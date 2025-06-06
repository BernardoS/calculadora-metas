import {
    ErrorMessage,
    Formik,
} from "formik";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import {
    ErrorText,
    FormContainer,
    GoalForm,
    GoalFormBody,
    GoalFormButton,
    GoalFormDivider,
    GoalFormField,
    GoalFormFieldSet,
    GoalFormFooter,
    GoalFormSecondaryButton,
    GoalInfoContainer,
    GoalInfoContent,
    InfoBox
} from "./style";
import NoteIcon from "../../assets/icons/note-edit.svg";
import RightIcon from "../../assets/icons/right.svg";
import LeftIcon from "../../assets/icons/left-blue.svg";
import { ChangeEvent, useState } from "react";
import moment from "moment";
import Goal from "../../interfaces/Goal";
import { GoalFormValuesFirstStep, GoalFormValuesSecondStep } from "../../interfaces/GoalForm";
import { firstStepValidationSchema, secondStepValidationSchema } from "../../validators/GoalForm";
import GoalSteps from "../../components/GoalSteps";
import { useNavigate } from "react-router-dom";



const GoalInfo = () => {

    const [currentStep, setCurrentStep] = useState<number>(1);
    const [goal, setGoal] = useState<Goal>({});
    const navigate = useNavigate();


    async function nextStep(
        values: GoalFormValuesFirstStep
    ) {
        console.log(values);
        const newGoal: Goal = {
            initialDate: values.initialDate,
            initialQuantity: values.initialQuantity,
            growthRate: values.growthRate
        }
        await setGoal(newGoal);
        await setCurrentStep(2);
    }

    function createPlan(
        values: GoalFormValuesSecondStep
    ) {
        console.log(values);
        const newGoal: Goal = { ...goal, finalDate: values.finalDate, finalQuantity: values.finalQuantity }
        setGoal(newGoal);
        navigate("/calculadora-metas/resultados");
    }

    return (
        <>
            <Header />
            <GoalInfoContainer>
                <GoalInfoContent>
                    <InfoBox>
                        <GoalSteps step={currentStep} theme="" />
                        <FormContainer>
                            <Formik<GoalFormValuesFirstStep>
                                initialValues={{
                                    initialQuantity: 0.0,
                                    initialDate: moment(new Date()).format("YYYY-MM"),
                                    growthRate: 0
                                }}
                                onSubmit={nextStep}
                                validationSchema={firstStepValidationSchema}>
                                {({ setFieldValue }) => (
                                    <GoalForm>
                                        <GoalFormBody>

                                            <GoalFormFieldSet className={currentStep == 1 ? "current-step" : "disabled-step"}>
                                                <h2><b>I</b><br />Defina o quanto você tem e quando vai começar</h2>
                                                <label htmlFor='initialQuantity'>
                                                    Quanto você tem atualmente para a sua meta ?  <br /><b>Ex.: Digite 25.00 para R$ 25,00</b>
                                                </label>
                                                <GoalFormField
                                                    name="initialQuantity"
                                                    id="initialQuantity"
                                                    disabled={currentStep != 1}
                                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                        const formattedValue = e.target.value.replace(",", ".");
                                                        setFieldValue("initialQuantity", formattedValue);
                                                    }} />
                                                <ErrorMessage name='initialQuantity' component={ErrorText} />

                                                <label htmlFor='initialDate'>
                                                    Quando você vai começar a juntar dinheiro ?
                                                </label>
                                                <GoalFormField type="month" name="initialDate" id="initialDate" disabled={currentStep != 1} />
                                                <ErrorMessage name='initialDate' component={ErrorText} />

                                                <label htmlFor='growthRate'>
                                                    Quanto você acha que seu dinheiro vai render em cada mês? <br /><b>Ex.: Digite 10 para 10% ao mês</b>
                                                </label>
                                                <GoalFormField name="growthRate" id="growthRate" disabled={currentStep != 1} />
                                                <ErrorMessage name='growthRate' component={ErrorText} />
                                            </GoalFormFieldSet>

                                        </GoalFormBody>
                                        <GoalFormFooter>

                                            {currentStep == 1 && (
                                                <GoalFormButton type="submit">
                                                    Próximo passo <img src={RightIcon} alt="ícone de próximo passo" />
                                                </GoalFormButton>
                                            )}

                                        </GoalFormFooter>
                                    </GoalForm>
                                )}
                            </Formik>

                            <GoalFormDivider />

                            <Formik<GoalFormValuesSecondStep>
                                initialValues={{
                                    finalQuantity: 0.0,
                                    finalDate: moment(new Date()).format("YYYY-MM"),
                                }}
                                onSubmit={createPlan}
                                validationSchema={secondStepValidationSchema}>
                                {({ setFieldValue }) => (
                                    <GoalForm>
                                        <GoalFormBody>

                                            <GoalFormFieldSet className={currentStep == 2 ? "current-step" : "disabled-step"}>
                                                <h2><b>II</b><br />Defina o quanto você quer e quando você quer</h2>
                                                <label htmlFor='finalQuantity'>
                                                    Quanto dinheiro você precisa para a sua meta ?
                                                </label>
                                                <GoalFormField
                                                    name="finalQuantity"
                                                    id="finalQuantity"
                                                    disabled={currentStep != 2}
                                                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                                        const formattedValue = e.target.value.replace(",", ".");
                                                        setFieldValue("finalQuantity", formattedValue);
                                                    }} />
                                                <ErrorMessage name='finalQuantity' component={ErrorText} />

                                                <label htmlFor='finalDate'>
                                                    Quando você quer alcançar esta quantia ?
                                                </label>
                                                <GoalFormField type="month" name="finalDate" id="finalDate" disabled={currentStep != 2} />
                                                <ErrorMessage name='finalDate' component={ErrorText} />
                                            </GoalFormFieldSet>

                                        </GoalFormBody>
                                        <GoalFormFooter>

                                            {currentStep == 2 && (
                                                <>
                                                    <GoalFormSecondaryButton onClick={() => setCurrentStep(1)} type="button">
                                                        <img src={LeftIcon} alt="ícone de voltar" />
                                                        Voltar
                                                    </GoalFormSecondaryButton>


                                                    <GoalFormButton type="submit">
                                                        Calcular planejamento <img src={NoteIcon} alt="ícone de calcular a meta" />
                                                    </GoalFormButton>


                                                </>

                                            )}

                                        </GoalFormFooter>
                                    </GoalForm>
                                )}
                            </Formik>
                        </FormContainer>

                    </InfoBox>
                </GoalInfoContent>
            </GoalInfoContainer>
            <Footer />
        </>
    )
}


export default GoalInfo;
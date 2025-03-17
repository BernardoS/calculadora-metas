import {
    ErrorMessage,
    Formik,
    FormikHelpers
} from "formik";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import * as Yup from 'yup';
import {
    GoalForm,
    GoalFormBody,
    GoalFormButton,
    GoalFormDivider,
    GoalFormField,
    GoalFormFieldSet,
    GoalFormFooter,
    GoalInfoContainer,
    GoalInfoContent,
    InfoBox
} from "./style";
import NoteIcon from "../../assets/icons/note-edit.svg";


const GoalInfo = () => {

    interface GoalFormValues {
        initialQuantity: number;
        finalQuantity: number;
        initialDate: Date;
        finalDate: Date;
        growthRate: number;
    }

    const validationSchema = Yup.object({
        name: Yup.string()
            .required("Por favor, informe o seu nome !"),
        email: Yup.string()
            .email("Por favor, informe um e-mail válido")
            .required("Por favor, informe seu e-mail"),
        password: Yup.string()
            .min(8, "A senha deve possuir no mínimo 8 caracteres")
            .required("Por favor, informe uma senha para seu cadastro"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'As duas senhas não coincidem!')
            .required("Por favor, confirme sua senha")
    })

    function createPlan(
        values: GoalFormValues,
        { resetForm }: FormikHelpers<GoalFormValues>
    ) {
        console.log("Formulário submetido:", values);

        const user = values;
        console.log(user);

        resetForm();
    }

    return (
        <>
            <Header />
            <GoalInfoContainer>
                <GoalInfoContent>
                    <InfoBox>
                        <Formik<GoalFormValues>
                            initialValues={{
                                initialQuantity: 0.0,
                                finalQuantity: 0.0,
                                initialDate: new Date(),
                                finalDate: new Date(),
                                growthRate: 0
                            }}
                            onSubmit={createPlan}
                            validationSchema={validationSchema}>

                            <GoalForm>
                                <GoalFormBody>
                                    <GoalFormFieldSet>
                                        <h2><b>I</b><br />Defina o quanto você tem e quando vai começar</h2>
                                        <label htmlFor='initialQuantity'>
                                            Quanto você tem atualmente para a sua meta ?
                                        </label>
                                        <GoalFormField name="initialQuantity" id="initialQuantity" />
                                        <ErrorMessage name='initialQuantity' />

                                        <label htmlFor='initialDate'>
                                            Quando você vai começar a juntar dinheiro ?
                                        </label>
                                        <GoalFormField type="month" name="initialDate" id="initialDate" />
                                        <ErrorMessage name='initialDate' />

                                        <label htmlFor='growthRate'>
                                            Quanto você acha que seu dinheiro vai render em cada mês?
                                        </label>
                                        <GoalFormField name="growthRate" id="growthRate" />
                                        <ErrorMessage name='growthRate' />
                                    </GoalFormFieldSet>

                                    <GoalFormDivider/>

                                    <GoalFormFieldSet>
                                        <h2><b>II</b><br />Defina o quanto você quer e quando você quer</h2>
                                        <label htmlFor='finalQuantity'>
                                            Quanto dinheiro você precisa para a sua meta ?
                                        </label>
                                        <GoalFormField name="finalQuantity" id="finalQuantity" />
                                        <ErrorMessage name='finalQuantity' />

                                        <label htmlFor='finalDate'>
                                            Quando você quer alcançar esta quantia ?
                                        </label>
                                        <GoalFormField type="month" name="finalDate" id="finalDate" />
                                        <ErrorMessage name='finalDate' />
                                    </GoalFormFieldSet>
                                </GoalFormBody>
                                <GoalFormFooter>
                                    <GoalFormButton type="button">
                                        Calcular planejamento <img src={NoteIcon} alt="ícone de calcular a meta" />
                                    </GoalFormButton>
                                </GoalFormFooter>

                            </GoalForm>

                        </Formik>
                    </InfoBox>
                </GoalInfoContent>
            </GoalInfoContainer>
            <Footer />
        </>
    )
}

export default GoalInfo;
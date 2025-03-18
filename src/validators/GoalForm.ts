import * as Yup from 'yup';

export const firstStepValidationSchema = Yup.object({
    initialQuantity: Yup.number()
        .typeError('O valor deve ser um número válido')
        .required("Por favor, forneça um valor para a quantidade inicial !"),
    initialDate: Yup.date()
        .required("Por favor, preencha a data inicial !"),
    growthRate: Yup.number()
        .min(0, "Por favor, forneça um valor maior que zero !")
        .max(100, "Por favor, forneça um valor menor que 100!")
        .required("Por favor, forneça um valor para a quantidade inicial !")
});

export const secondStepValidationSchema = Yup.object({
    finalQuantity: Yup.number()
        .typeError('O valor deve ser um número válido')
        .positive("Por favor, forneça um valor maior que zero !")
        .required("Por favor, forneça um valor para a quantidade final !"),
    finalDate: Yup.date()
        .required("Por favor, preencha a data final !"),

})
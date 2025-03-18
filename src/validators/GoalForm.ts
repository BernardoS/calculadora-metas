import * as Yup from 'yup';

export const firstStepValidationSchema = Yup.object({
    initialQuantity: Yup.number()
        .min(0.1, "Por favor, forneça um valor maior que zero !")
        .required("Por favor, forneça um valor para a quantidade inicial !"),
    initialDate: Yup.date()
        .required("Por favor, preencha a data inicial !"),
    growthRate: Yup.number()
        .min(0, "Por favor, forneça um valor maior que zero !")
        .max(100, "Por favor, forneça um valor menor que 100!")
});

export const secondStepValidationSchema = Yup.object({
    finalQuantity: Yup.number()
        .min(0.1, "Por favor, forneça um valor maior que zero !")
        .required("Por favor, forneça um valor para a quantidade final !"),
    finalDate: Yup.date()
        .required("Por favor, preencha a data final !"),

})
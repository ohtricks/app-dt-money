import * as yup from 'yup'

export const schema = yup.object().shape({
    email: yup.string().email("E-mail invalido!").required("E-mail é obrigatório"),
    password: yup.string().min(6, "Minimo de 6 caracteres").required("Senha é obrigatório"),
})
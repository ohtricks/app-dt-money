import * as yup from 'yup'

export const schema = yup.object().shape({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().email("E-mail invalido!").required("E-mail é obrigatório"),
    password: yup.string().min(6, "Minimo de 6 caracteres").required("Senha é obrigatório"),
    confirmPassword: yup.string()
        .oneOf([yup.ref("password")], "As senhas devem ser igual")
        .required("Confirmação de senha é obrigatório"),
})
import { AppButton } from "@/components/AppButton";
import { AppInput } from "@/components/AppInput";
import { PublicStackParamsList } from "@/routes/PublicRoutes";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from "./schema";
import { useAthContext } from "@/context/auth.context";
import { AxiosError } from "axios";

export interface FormRegisterParams {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
}
export const RegisterForm = () => {
    const { 
        control,
        handleSubmit,
        formState: {
            isSubmitting
        }
    } = useForm<FormRegisterParams>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        resolver: yupResolver(schema)
    });

    const navigation = useNavigation<NavigationProp<PublicStackParamsList>>();
    const { handleRegister } = useAthContext();
    
    const onSusbmit = async (dataForm: FormRegisterParams) => {
        try {
            handleRegister(dataForm);
        } catch (error) {
            if(error instanceof AxiosError){
                console.log(error.response?.data);
            }else{
                console.log(error);
            }
        }
    };

    return (
        <>
            <AppInput 
                control={control}
                name="name"
                leftIconName="person"
                label="Nome"
                placeholder="Seu nome" />

            <AppInput 
                control={control}
                name="email"
                leftIconName="mail-outline"
                label="E-mail"
                placeholder="Seu e-mail" />

            <AppInput 
                control={control}
                name="password"
                leftIconName="lock-outline"
                label="Senha"
                placeholder="Sua senha"
                secureTextEntry />

            <AppInput 
                control={control}
                name="confirmPassword"
                leftIconName="lock-outline"
                label="Confirme a senha"
                placeholder="Confirme sua senha"
                secureTextEntry />

            <View className="flex-1 justify-between mt-8 mb-6 min-h-[250px]">
                <AppButton iconName="arrow-forward" onPress={handleSubmit(onSusbmit)}>
                    Cadastrar
                </AppButton>

                <View>
                    <Text className="mb-6 text-gray-300 text-base">
                        Já possui uma conta?
                    </Text>
                    <AppButton mode="ouline" iconName="arrow-forward"
                        onPress={() => navigation.goBack()}>
                        Acessar
                    </AppButton>
                </View>
            </View>
        </>
    )
}
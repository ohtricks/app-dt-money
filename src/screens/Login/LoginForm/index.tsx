import { AppButton } from "@/components/AppButton";
import { AppInput } from "@/components/AppInput";
import { AuthHeader } from "@/components/AuthHeader";
import { useForm } from "react-hook-form"
import { Text, View } from "react-native";

export interface FormLoginParams {
    email: string;
    password: string;
}

export const LoginForm = ( ) => {
    const {
        control,
        handleSubmit,
        formState: {
            isSubmitting
        }
    } = useForm<FormLoginParams>();

    return (
        <>
            <AuthHeader />

            <AppInput control={control} 
                name="email" 
                label="E-mail" 
                placeholder="mail@example.br" 
                leftIconName="mail-outline" />
                
            <AppInput control={control} 
                name="password" 
                label="Senha" 
                placeholder="Sua senha" 
                leftIconName="lock-outline"
                secureTextEntry  />

            <View className="flex-1 justify-between mt-8 mb-6 min-h-[250px]">
                <AppButton iconName="arrow-forward">
                    Login
                </AppButton>

                <View>
                    <Text className="mb-6 text-gray-300 text-base">
                        Ainda não possui conta Zé?
                    </Text>
                    <AppButton mode="ouline" iconName="arrow-forward">
                        Cadastrar
                    </AppButton>
                </View>
            </View>
        </>
    )
}
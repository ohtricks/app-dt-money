import { AppButton } from "@/components/AppButton";
import { AppInput } from "@/components/AppInput";
import { AuthHeader } from "@/components/AuthHeader";
import { PublicStackParamsList } from "@/routes/PublicRoutes";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form"
import { ActivityIndicator, Text, View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup"
import { schema } from "./schema";
import { useAthContext } from "@/context/auth.context";
import { AxiosError } from "axios";
import { AppError } from "@/shared/helpers/AppError";
import { useSnackbarContext } from "@/context/snackbar.context";
import { useErrorHandler } from "@/shared/hooks/useErrorHandler";
import { colors } from "@/shared/colors";

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
    } = useForm<FormLoginParams>({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: yupResolver(schema)
    });

    const navigation = useNavigation<NavigationProp<PublicStackParamsList>>();
    const { handleAuthenticate } = useAthContext();
    // const { notify } = useSnackbarContext();
    const { handleError } = useErrorHandler();

    const onSusbmit = async (userData: FormLoginParams) => {
        try {
            await handleAuthenticate(userData)
        } catch (error) {
            handleError(error, "Falha no login Zé");

            // if(error instanceof AppError){
            //     notify({
            //         message: error.message,
            //         messageType: "ERROR"
            //     });
            //     console.log(error.message);
            // }else{
            //     console.log(error);
            // }
        }
    }

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
                <AppButton iconName="arrow-forward" onPress={handleSubmit(onSusbmit)}>
                    {isSubmitting ? <ActivityIndicator color={colors.white} /> : "Login"}
                </AppButton>

                <View>
                    <Text className="mb-6 text-gray-300 text-base">
                        Ainda não possui conta Zé?
                    </Text>
                    <AppButton mode="ouline" iconName="arrow-forward"
                        onPress={() => navigation.navigate("Register")}>
                        Cadastrar
                    </AppButton>
                </View>
            </View>
        </>
    )
}
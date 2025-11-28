import { PublicStackParamsList } from "@/routes/PublicRoutes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, TouchableOpacity, View } from "react-native"
import { RegisterForm } from "./RegisterForm";
import { DismissKeyboardView } from "@/components/DismissKeyboardView";
import { AuthHeader } from "@/components/AuthHeader";

export const Register = () => {
    const navigation = useNavigation<StackNavigationProp<PublicStackParamsList>>();

    return (
        <DismissKeyboardView>
            <AuthHeader />
            <View className="flex-1 w-[82%] self-center">
                <RegisterForm />
            </View>
        </DismissKeyboardView>
    )
}
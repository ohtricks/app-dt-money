import { PublicStackParamsList } from "@/routes/PublicRoutes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, TouchableOpacity, View } from "react-native"

export const Register = () => {
    const navigation = useNavigation<StackNavigationProp<PublicStackParamsList>>();

    return (
        <View className="flex-1 justify-center items-center bg-green-950">
            <Text>
                Registro
            </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text className="color-white">
                    Ir para Registro
                </Text>
            </TouchableOpacity>
        </View>
    )
}
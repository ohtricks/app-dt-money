import { useAthContext } from "@/context/auth.context";
import { Text, TouchableOpacity, View } from "react-native";

export const Home = () => {
    const { handleLogout } = useAthContext();
    
    return (
        <View>
            <Text>Home zé</Text>
            <TouchableOpacity onPress={handleLogout}>
                <Text>Clique aqui para sair</Text>
            </TouchableOpacity>
        </View>
    );
}
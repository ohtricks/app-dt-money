import { AppHeader } from "@/components/AppHeader";
import { useAthContext } from "@/context/auth.context";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export const Home = () => {
    const { handleLogout } = useAthContext();
    
    return (
        <SafeAreaView className="flex-1 bg-background-primary">
            <AppHeader />
            <TouchableOpacity onPress={handleLogout}>
                <Text>Clique aqui para sair</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}
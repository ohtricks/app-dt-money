import { useAthContext } from "@/context/auth.context"
import { useBootomSheetContext } from "@/context/bottomsheet.context"
import { colors } from "@/shared/colors"
import { MaterialIcons } from "@expo/vector-icons"
import { Image, Text, TouchableOpacity, View } from "react-native"

export const AppHeader = () => {
    const { handleLogout } = useAthContext();
    const { openBottomSheet } = useBootomSheetContext();
    return (
        <View className="flex-row justify-between w-full p-8">
            <View>
                <Image source={require("@/assets/Logo.png")} className="w-32 h-7" />
                <TouchableOpacity className="flex-row items-center gap-2 mt-2" onPress={handleLogout}>
                    <MaterialIcons name="logout" color={colors.gray[700]} />
                    <Text className="text-gray-700 text-base">Sair da conta</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity className="flex-row items-center justify-center bg-accent-brand w-[130px] rounded-xl h-[50px]"
                onPress={() => {
                    openBottomSheet(<Text>Formulaárddadad teste</Text>, 0)
                }}>
                <MaterialIcons name="add" color={colors.white} />
                <Text className="text-white text-sm font-bold">Nova transação</Text>
            </TouchableOpacity>
        </View>
    )
}
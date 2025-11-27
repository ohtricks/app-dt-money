import { useKeyboardVisible } from "@/shared/hooks/useKeyboardVisible";
import { Image, View } from "react-native"

export const AuthHeader = () => {
    const keyBoardIsVisible = useKeyboardVisible();
    
    if(keyBoardIsVisible) return <></>;

    return (
        <View className="flex-1 justify-center items-center min-h-40">
            <Image source={require("@/assets/Logo.png")} className="h-[48px] w-[255px]" />
        </View>
    )
}
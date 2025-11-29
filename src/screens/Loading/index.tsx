import { useAthContext } from "@/context/auth.context";
import { colors } from "@/shared/colors";
import { FC, useEffect } from "react";
import { ActivityIndicator, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

interface Props {
    setLoading: (value: boolean) => void;
}

export const Loading: FC<Props> = ({setLoading}) => {
    const { restoreUserSession, handleLogout } = useAthContext();

    useEffect(() => {
        (async () => {
            try {
                const user = await restoreUserSession();

                if(!user){
                    await handleLogout();
                }
            } catch (error) {
                await handleLogout();
            } finally {
                setLoading(false);
            }
        })();
    }, [])
    return (
        <SafeAreaView className="flex-1 justify-center items-center bg-background-primary">
            <>
                <Image className="h-12 w-64" source={require("@/assets/Logo.png")} />
                <ActivityIndicator color={colors.white} className="mt-20" />
            </>
        </SafeAreaView>
    )
}
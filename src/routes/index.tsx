import { NavigationContainer } from "@react-navigation/native";
import PublicRoutes from "./PublicRoutes";
import { useCallback, useState } from "react";
import PrivateRoutes from "./PrivateRoutes";
import { StatusBar } from "expo-status-bar";
import { useAthContext } from "@/context/auth.context";

const NavigationRoutes = () => {
    const { user, token } = useAthContext();

    const Routes = useCallback(() => {
        if(!user || !token){
            return <PublicRoutes />
        }else{
            return <PrivateRoutes />
        }
    }, [user, token]);

    return (
        <NavigationContainer>
            <StatusBar style="light" />
            <Routes />
        </NavigationContainer>
    );

};

export default NavigationRoutes;
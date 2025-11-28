import { Home } from "@/screens/Home";
import { createStackNavigator } from "@react-navigation/stack"

export type PrivateStackParamsList = {
    Home: undefined;
}

const PrivateRoutes = () => {
    const PrivateStack = createStackNavigator<PrivateStackParamsList>();

    return (
        <PrivateStack.Navigator
            screenOptions={{
                headerShown: true
            }}>
            <PrivateStack.Screen name="Home" component={Home} />
        </PrivateStack.Navigator>
    );
};

export default PrivateRoutes;
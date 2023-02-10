import { createStackNavigator } from '@react-navigation/stack';
import Routes from './router';

const hideHeader = { headerShown: false };
const Stack = createStackNavigator();

export default function Navigator() {

    const AuthStack = () => {
        return (
            <Stack.Navigator initialRouteName={Routes.Login.name} screenOptions={hideHeader}>
                <Stack.Screen name={Routes.Login.name} component={Routes.Login.Screen} />

            </Stack.Navigator>
        )
    }


    const AppStack = () => {
        return (
            <Stack.Navigator initialRouteName={Routes.Splash.name} screenOptions={hideHeader} >
                <Stack.Screen name={Routes.Splash.name} component={Routes.Splash.Screen} />
                <Stack.Screen name={Routes.Auth.name} component={AuthStack} />

            </Stack.Navigator>
        )
    }

    return (

        <AppStack />
    )
};
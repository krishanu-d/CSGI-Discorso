import { createStackNavigator } from '@react-navigation/stack';
import Routes from './router';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icons, Images } from '../Assets/Asset';
import { Colors } from '../Common/Colors';
import { View, Dimensions } from "react-native";
import { Fonts } from '../Common/Fonts';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Tab = createBottomTabNavigator();
const screenHeight = Dimensions.get('screen').height
const hideHeader = { headerShown: false };
const Stack = createStackNavigator();

export default function Navigator() {

    const AuthStack = () => {
        return (
            <Stack.Navigator initialRouteName={Routes.Login.name} screenOptions={hideHeader}>
                <Stack.Screen name={Routes.Login.name} component={Routes.Login.Screen} />
                <Stack.Screen name={Routes.Dash.name} component={DashStack} />
            </Stack.Navigator>
        )
    }

    const DashStack = () => {
        return (
            <Stack.Navigator initialRouteName={Routes.Dashboard.name} screenOptions={hideHeader}>
                <Stack.Screen name={Routes.Dashboard.name} component={Routes.Dashboard.Screen} options={{
                    title: '',
                    headerStyle: { backgroundColor: Colors.bgGreyColor },
                    headerLeft: () => {
                        return (
                            <View style={{ width: '100%', height: '100%' }} >
                                <TouchableOpacity>
                                    <View style={{ backgroundColor: Colors.logoBg, height: 70, width: 70, justifyContent: 'center', alignItems: 'center', borderRadius: 80, }}>
                                        <FastImage source={Images.Logo} style={{ width: 51, height: 39 }} resizeMode={'contain'} />
                                    </View>
                                </TouchableOpacity>

                            </View>
                        )

                    },
                    headerRight: () => {
                        return (
                            <View style={{ backgroundColor: Colors.bgWhite, height: 44, width: screenWidth * 0.4, borderRadius: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 10 }}>
                                <View style={{ alignItems: 'flex-end', paddingRight: 10 }}>
                                    <Text style={{ fontSize: 12, fontFamily: Fonts.RobotoBold, color: Colors.darkGrey }}>SIGNED IN AS</Text>
                                    <Text style={{ fontSize: 12, fontFamily: Fonts.RobotoBold, color: Colors.bgBlack }} >{userInfo ? userInfo.display_name : 'GUEST USER'}</Text>

                                </View>
                                <View style={{ width: 30, height: 30, borderRadius: 50, backgroundColor: Colors.bgGreyColor, alignItems: 'center', justifyContent: 'center', }}>
                                    <FastImage source={Icons.person} resizeMode={'contain'} style={{ width: 17, height: 17 }} tintColor={Colors.navyBlue} />
                                </View>

                            </View>
                        )
                    },

                }} />
            </Stack.Navigator>
        )
    }

    const AccountStack = () => {
        return (
            <Stack.Navigator initialRouteName={Routes.Account.name} screenOptions={hideHeader}>
                <Stack.Screen name={Routes.Account.name} component={Routes.Account.Screen} />
            </Stack.Navigator>

        )
    }

    const QuizStack = () => {
        return (
            <Stack.Navigator initialRouteName={Routes.QuizList.name} screenOptions={hideHeader}>
                <Stack.Screen name={Routes.QuizList.name} component={Routes.QuizList.Screen} />
                <Stack.Screen name={Routes.Quiz.name} component={Routes.Quiz.Screen} />
            </Stack.Navigator>

        )
    }

    const BottomTabNavigator = () => {
        return (
            <Tab.Navigator initialRouteName='DashStack' backBehavior='history'
                screenOptions={{
                    tabBarStyle: { backgroundColor: Colors.bgGreyColor, height: screenHeight * .10 },
                    tabBarActiveTintColor: Colors.navyBlue,
                    tabBarInactiveTintColor: Colors.bgWhite,
                    tabBarLabelStyle: { fontSize: 12, bottom: '11%', fontFamily: Fonts.Regular },
                }}>

                <Tab.Screen name="DashStack" component={DashStack} options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => (
                        <View style={{ height: 47, width: 47, justifyContent: 'center', alignItems: 'center', backgroundColor: focused ? Colors.bgWhite : Colors.bgGreyColor, borderRadius: 10 }}>
                            <FastImage source={focused ? Icons.homeFill : Icons.home} resizeMode='contain' style={{ width: '70%', height: '70%' }} tintColor={color} />
                        </View>
                    )
                }} />
                <Tab.Screen name="QuizStack" component={QuizStack} options={{
                    tabBarLabel: 'Quiz',
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => (
                        <View style={{ height: 47, width: 47, justifyContent: 'center', alignItems: 'center', backgroundColor: focused ? Colors.bgWhite : Colors.bgGreyColor, borderRadius: 10 }}>
                            <FastImage source={focused ? Icons.test : Icons.testFill} resizeMode='contain' style={{ width: '70%', height: '70%' }} tintColor={color} />
                        </View>
                    )
                }} />
                <Tab.Screen name="AccountStack" component={AccountStack} options={{
                    tabBarLabel: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused, color }) => (
                        <View style={{ height: 47, width: 47, justifyContent: 'center', alignItems: 'center', backgroundColor: focused ? Colors.bgWhite : Colors.bgGreyColor, borderRadius: 10 }}>
                            <FastImage source={focused ? Icons.person : Icons.home} resizeMode='contain' style={{ width: '70%', height: '70%' }} tintColor={color} />
                        </View>
                    )
                }} />

            </Tab.Navigator>
        )
    }

    const AppStack = () => {
        return (
            <Stack.Navigator initialRouteName={Routes.Splash.name} screenOptions={hideHeader} >
                <Stack.Screen name={Routes.Splash.name} component={Routes.Splash.Screen} />
                <Stack.Screen name={Routes.Auth.name} component={AuthStack} />
                <Stack.Screen name={Routes.BottomTabs.name} component={BottomTabNavigator} />
                <Stack.Screen name={Routes.Quiz.name} component={QuizStack} />

            </Stack.Navigator>
        )
    }

    return (

        <AppStack />
    )
};
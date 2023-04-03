import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StatusBar, StyleSheet, Dimensions } from "react-native";
import { TransitionView } from '../../TransitionView/TransitionView';
import { useIsFocused } from '@react-navigation/native';
import { Colors } from '../../Common/Colors';
import FastImage from 'react-native-fast-image';
import { Icons, Images } from '../../Assets/Asset';
import CommonButton from '../../Common/CommonButton';
import { Fonts } from '../../Common/Fonts';
// import { useIsFocused } from '@react-navigation/native';
// import Routes from '../Navigation/Routes'
// import { Utils } from '../Common/Utils';
// import { Values } from '../Common/Values';
// import { SplashDatabaseService } from '../Service/DatabaseService';
// import { Endpoints, ApiVersion, Method, StageURL } from '../Config/Keys';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useDispatch, useSelector } from 'react-redux';

const screenHeight = Dimensions.get('screen').height


export default function Splash(props) {


    const isFocused = useIsFocused()

    useEffect(() => {

        if (isFocused)
            checkAuth();

    }, [isFocused])

    const checkAuth = async () => {
        // const authToken = await Utils.getData(Values.AUTH_TOKEN);
        // const info = await Utils.getData(Values.USER_INFO);
        // const cart = await Utils.getData(Values.CART_DATA) || [];
        // console.log('SPLASH SCREEN AUTH TOKEN---------->', authToken, info);
        // console.log("cart Detail--------->>>>", cart);
        // if (authToken && info) {
        //     dispatch(setUserInfo(info))
        //     dispatch(addItemToCart(cart||null))


        // setTimeout(() => {
        //     props.navigation.replace('Auth', { screen: 'Login' });
        // }, 2000)



        // }
        // else {
        //     dispatch(setUserInfo(null))
        //     let dataCleared = await Utils.clearAllData();
        //     if (dataCleared) {
        //         getGuestToken();
        //     }
        // }
    }

    const getStarted = () => {
        props.navigation.replace('Auth', { screen: 'Login' });
    }


    return (
        <>
            <StatusBar
                translucent
                barStyle='light-content'
                backgroundColor={Colors.navyBlue}
            />
            <SafeAreaView style={Styles.mainContainer}>

                <TransitionView animation="slideInDown">
                    <FastImage source={Images.splashBg} style={{ position: 'relative', height: '100%', width: '100%' }} resizeMode={'cover'} />
                </TransitionView>
                <View style={{ position: 'absolute', alignSelf: 'center', top: '43%', alignItems: 'center', height: screenHeight / 2, justifyContent: 'space-between' }}>

                    <TransitionView animation="slideInUp">
                        <View style={{ backgroundColor: Colors.logoBg, height: 130, width: 130, justifyContent: 'center', alignItems: 'center', borderRadius: 80, }}>
                            <FastImage source={Images.Logo} style={{ width: 80, height: 61 }} resizeMode={'contain'} />
                        </View>
                    </TransitionView>

                    <TransitionView animation="slideInUp">
                        <View style={{ alignItems: 'center'  }}>
                            <Text style={{ color: Colors.bgBlack, fontSize: 32, fontFamily:Fonts.Medium}}>CSGI DISCORSO</Text>
                            <View style={{backgroundColor:'red', height:20}}></View>
                            <Text style={{ color: Colors.bgBlack, fontSize: 16, textAlign:'center', fontFamily:Fonts.Regular }}>A platform to upgrade yourself</Text>
                        </View>
                    </TransitionView>
                    <View></View>

                    <TransitionView animation="slideInUp">
                        <View style={{ justifyContent: 'center' }}>
                            <CommonButton title='Get Started' onPress={() => { getStarted() }} backgroundColor={Colors.btnColor} style={{ height: 50, minWidth: '80%' }} borderRadius={50} textStyle={{ color: Colors.bgBlack, fontSize: 16, }} />
                            <FastImage source={Icons.rightArrow} style={{ width: 18, height: 18, position: 'absolute', right: 20 }} resizeMode={'contain'} />

                        </View>
                    </TransitionView>


                </View>


            </SafeAreaView>
        </>
    );
}
const Styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.bgWhite,
        flex: 1,
    },
})


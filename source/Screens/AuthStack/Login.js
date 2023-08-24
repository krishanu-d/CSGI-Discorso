import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StatusBar, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { Colors } from '../../Common/Colors';
import FastImage from 'react-native-fast-image';
import { Icons, Images } from '../../Assets/Asset';
import CommonButton from '../../Common/CommonButton';
import { Fonts } from '../../Common/Fonts';
import { useScrollToTop } from '@react-navigation/native';
import { loginDatabaseService } from '../../Common/DatabaseService';
import { errorMessages } from '../../Common/Constants';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../Redux/action/userAction';
import { Values } from '../../Common/Values';
import { Utils } from '../../Common/Utils';


export default function Login(props) {

    const [hasErr, setHasErr] = useState(false);
    const [hasPasswordErr, setHasPasswordErr] = useState(false);

    const [enrollmentNumber, setEnrollmentNumber] = useState('');
    const [password, setPassword] = useState('');
    const [passErr, setPassErr] = useState('');
    const [enrollErr, setEnrollErr] = useState('');
    const[visible,setVisible]=useState(false);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     // console.log("userInfo---------------------->>>>>>>");
    //     if (isFocused)
    //         checkAuth();

    //     if (userInfo) {
    //         getCartData();
    //     }

    // }, [isFocused])

    const submit = async () => {

        if (enrollmentNumber.length > 0 && password.length > 0) {
            let data = { loginId: enrollmentNumber, password: password }

            let response = await loginDatabaseService(data);

            // console.log('response bahar wala', response.data?.code);


            if (response.data?.code === 200) {
                setHasErr(false);


                console.log('heloooooooooooooooo');
                setHasErr(false);
                setHasPasswordErr(false);

                dispatch(setToken(response.data.token));
                await Utils.storeData(Values.AUTH_TOKEN, response.data.token);

                props.navigation.replace('BottomTabs', { screen: 'Home', params: { screen: 'Dashboard' }, });

            } else {
                setPassErr(errorMessages.incorrectPassword);
                setEnrollErr(errorMessages.incorrectEnrollment);
                setHasPasswordErr(true);

                setHasErr(true);
            }

        } else {
            setPassErr(errorMessages.emptyField);
            setEnrollErr(errorMessages.emptyField);
            setHasPasswordErr(true);
            setHasErr(true);
        }

    }


    return (
        <>
            <StatusBar
                translucent
                barStyle='dark-content'
                backgroundColor={Colors.bgWhite}
            />
            <SafeAreaView style={Styles.mainContainer}>

                <KeyboardAvoidingView behavior='height' keyboardVerticalOffset={100} style={{ flex: 1 }} >
                    <View style={{}}>
                        {/* LOGO and text */}
                        <View style={{ paddingTop: 50, }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
                                <View style={{ backgroundColor: Colors.logoBg, height: 70, width: 70, justifyContent: 'center', alignItems: 'center', borderRadius: 80, }}>
                                    <FastImage source={Images.Logo} style={{ width: 51, height: 39 }} resizeMode={'contain'} />
                                </View>
                                <Text style={{ color: Colors.bgBlack, fontSize: 32, fontFamily: Fonts.Medium, paddingLeft: 10 }}>CSGI DISCORSO</Text>
                            </View>

                            <View style={{ paddingVertical: 10 }}>
                                <Text style={{ color: Colors.bgBlack, fontSize: 16, textAlign: 'center', fontFamily: Fonts.Regular, }}>For the students, By the students</Text>
                            </View>

                        </View>

                        {/* Input View */}
                        <View style={{ paddingTop: 50 }}>
                            <View style={{ paddingVertical: 15 }}>

                                <Text style={Styles.EnrollmentTextStyle}>Enrollment Number</Text>

                                <TextInput placeholder='AB1111' maxLength={6}
                                    placeholderTextColor={Colors.darkGrey}
                                    style={hasErr ? Styles.inputContainerErr : Styles.inputContainer}
                                    onChangeText={(t) => { setEnrollmentNumber(t); setHasErr(false) }}
                                />
                                {hasErr &&
                                    <Text style={Styles.inputErrTextStyle}>{enrollErr}</Text>}
                            </View>

                            <View style={{ paddingVertical: 15 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={Styles.EnrollmentTextStyle}>Password</Text>
                                    <TouchableOpacity onPress={()=>{setVisible(!visible) }}>
                                        <FastImage source={visible ? Icons.visible : Icons.invisible} style={{ width: 30, height: 30, paddingRight: 17 }} resizeMode='contain' />
                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <TextInput placeholder='*******' maxLength={20}
                                        placeholderTextColor={Colors.darkGrey}
                                        secureTextEntry={visible}
                                        style={hasPasswordErr ? Styles.inputContainerErr : Styles.inputContainer}
                                        onChangeText={(p) => { setPassword(p); setHasPasswordErr(false); }}
                                        onSubmitEditing={() => { submit() }}
                                    />
                                    {/* <View>

                                    </View> */}

                                </View>
                                {hasPasswordErr &&
                                    <Text style={Styles.inputErrTextStyle}>{passErr}</Text>}
                            </View>

                        </View>


                        <View style={{ justifyContent: 'center', paddingVertical: 30 }}>
                            <CommonButton title='Get Started' onPress={() => { submit() }} backgroundColor={Colors.btnColor} style={{ height: 50, minWidth: '80%' }} borderRadius={50} textStyle={{ color: Colors.bgBlack, fontSize: 16, }} />
                            <FastImage source={Icons.rightArrow} style={{ width: 18, height: 18, position: 'absolute', right: 20 }} resizeMode={'contain'} />

                        </View>

                    </View>
                </KeyboardAvoidingView>


            </SafeAreaView>
        </>
    );
}
const Styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.bgWhite,
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'yellow'
    },
    logo: {
        width: 180,
        height: 130,
    },
    inputContainer: {
        borderWidth: 5,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        height: 50,
        fontSize: 15,
        color: Colors.bgBlack,
        backgroundColor: Colors.bgGreyColor,
        paddingHorizontal: 10,
        borderColor: Colors.bgGreyColor,
        fontFamily: Fonts.Regular
    },
    inputContainerErr: {
        borderWidth: 1,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        height: 50,
        fontSize: 15,
        color: Colors.bgBlack,
        backgroundColor: Colors.bgGreyColor,
        fontFamily: Fonts.Regular,
        paddingHorizontal: 10,
        borderColor: Colors.red
    },
    EnrollmentTextStyle: {
        color: Colors.bgBlack,
        fontFamily: Fonts.Medium,
        fontSize: 16,
        textAlign: 'left',
        paddingHorizontal: 20,
        paddingBottom: 15
    },
    inputErrTextStyle: {
        color: Colors.red,
        fontFamily: Fonts.Regular,
        fontSize: 12,
        textAlign: 'left',
        paddingHorizontal: 20,
        paddingTop: 5
    },
})


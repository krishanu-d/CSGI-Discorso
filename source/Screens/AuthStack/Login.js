import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StatusBar, StyleSheet, TextInput, KeyboardAvoidingView } from "react-native";
import { Colors } from '../../Common/Colors';
import FastImage from 'react-native-fast-image';
import { Icons, Images } from '../../Assets/Asset';
import CommonButton from '../../Common/CommonButton';
import { Fonts } from '../../Common/Fonts';
import { useScrollToTop } from '@react-navigation/native';


export default function Login(props) {

    const [hasErr, setHasErr] = useState(false);
    const [hasPasswordErr, setHasPasswordErr] = useState(false);

    const [ enrollmentNumber, setEnrollmentNumber] = useState('');
    const [password, setPassword]= useState('');

    // useEffect(() => {
    //     // console.log("userInfo---------------------->>>>>>>");
    //     if (isFocused)
    //         checkAuth();

    //     if (userInfo) {
    //         getCartData();
    //     }

    // }, [isFocused])

    const submit =()=>{

        // function useRegex(enrollmentNumber) {
        //     let regex = /[0-9A-Za-z]+/i;
        //     console.log('helllooo',regex.test(enrollmentNumber)); 
        // }

        if(enrollmentNumber==='BH1111' ){
            if(password ==='CSGI@2023'){

                console.log('heloooooooooooooooo');
                setHasErr(false);
                setHasPasswordErr(false);
            }else{
                setHasPasswordErr(true);
            }
            // props.navigation.navigate('Dashboard');
        }else{
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

                    <KeyboardAvoidingView behavior='padding' style={{   }} keyboardVerticalOffset={40}>
                        {/* Input View */}
                        <View style={{ paddingTop: 70 }}>
                            <View style={{ paddingVertical: 15 }}>

                                <Text style={Styles.EnrollmentTextStyle}>Enrollment Number</Text>

                                <TextInput placeholder='AB1111' maxLength={6}
                                    placeholderTextColor={Colors.darkGrey}
                                    style={hasErr ? Styles.inputContainerErr : Styles.inputContainer}
                                    onChangeText={(t) => {setEnrollmentNumber(t) }}
                                // onSubmitEditing={() => {
                                //     onSumbit()
                                // }}
                                />
                                {hasErr &&
                                    <Text style={Styles.inputErrTextStyle}>Inorrect Enrollement Number</Text>}
                            </View>

                            <View style={{ paddingVertical: 15 }}>
                                <Text style={Styles.EnrollmentTextStyle}>Password</Text>
                                <View>
                                    <TextInput placeholder='*******' maxLength={12}
                                        placeholderTextColor={Colors.darkGrey}
                                        style={hasPasswordErr ? Styles.inputContainerErr : Styles.inputContainer}
                                        onChangeText={(p) => {setPassword(p) }}
                                    // onSubmitEditing={() => {
                                    //     onSumbit()
                                    // }}
                                    />
                                    <View>

                                    </View>

                                </View>
                                {hasPasswordErr &&
                                    <Text style={Styles.inputErrTextStyle}>Inorrect Password</Text>}
                            </View>

                        </View>

                    </KeyboardAvoidingView>

                    <View style={{ justifyContent: 'center', paddingVertical:60, }}>
                        <CommonButton title='Get Started' onPress={() => { submit() }} backgroundColor={Colors.btnColor} style={{ height: 50, minWidth: '80%' }} borderRadius={50} textStyle={{ color: Colors.bgBlack, fontSize: 16, }} />
                        <FastImage source={Icons.rightArrow} style={{ width: 18, height: 18, position: 'absolute', right: 20 }} resizeMode={'contain'} />

                    </View>

                </View>


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


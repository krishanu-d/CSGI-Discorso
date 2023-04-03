import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StatusBar, StyleSheet, TextInput, KeyboardAvoidingView } from "react-native";
import { Colors } from '../../Common/Colors';
import FastImage from 'react-native-fast-image';
import { Icons, Images } from '../../Assets/Asset';
import CommonButton from '../../Common/CommonButton';
import { Fonts } from '../../Common/Fonts';
import { useScrollToTop } from '@react-navigation/native';




export default function Dashboard(props) {

    return (
        <>
            <StatusBar
                translucent
                barStyle='light-content'
                backgroundColor={Colors.navyBlue}
            />
            <SafeAreaView style={Styles.mainContainer}>

               <Text>hello Account</Text>


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
   
})


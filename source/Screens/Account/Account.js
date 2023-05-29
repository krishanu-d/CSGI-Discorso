import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StatusBar, StyleSheet, TextInput, TouchableOpacity, Dimensions, FlatList } from "react-native";
import { Colors } from '../../Common/Colors';
import FastImage from 'react-native-fast-image';
import { Icons, Images } from '../../Assets/Asset';
import CommonButton from '../../Common/CommonButton';
import { Fonts } from '../../Common/Fonts';
import { useScrollToTop } from '@react-navigation/native';
import Header from '../../Common/Header';
import { Values } from '../../Common/Values';
import { Utils } from '../../Common/Utils';
import { useDispatch } from 'react-redux';
import { setToken } from '../../Redux/action/userAction';


const screenHeight = Dimensions.get('screen').height
const screenwidth = Dimensions.get('window').width

export default function Dashboard(props) {

    const data = [
        {
            id: '1',
            name: 'Logout',
        },
        {
            id: '2',
            name: 'Password Reset'
        }
    ];

    const dispatch = useDispatch();

    const routes = async(title) => {
        switch (title) {
            case 'Logout':
                {
                    dispatch(setToken(null));
                    await Utils.storeData(Values.AUTH_TOKEN, null);
                    return props.navigation.replace('Auth', { screen: 'Login', });
                }



            case 'Password Reset':
                return console.log('Password Reset')
        }
    }

    const renderList = ({ item, index }) => {
        return (
            <>
                <TouchableOpacity onPress={() => { routes(item.name) }} style={{ borderRadius: 10, }}>
                    <View style={{ width: screenwidth * 0.45, height: 50, backgroundColor: Colors.bgWhite, borderRadius: 10, marginBottom: 10, marginHorizontal: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 17, fontFamily: Fonts.Regular, color: Colors.bgBlack }}>{item.name}</Text>
                    </View>
                </TouchableOpacity >


            </>
        )
    }

    return (
        <>
            <StatusBar
                translucent
                barStyle='light-content'
                backgroundColor={Colors.navyBlue}
            />
            <SafeAreaView style={Styles.mainContainer}>
                <Header />

                <View style={{ width: screenwidth * .97, height: '100%', alignSelf: 'center' }}>

                    <View>
                        <Text style={{ color: Colors.heading, fontFamily: Fonts.Bold, fontSize: 28 }}>Account</Text>
                    </View>

                    <View style={{ marginTop: 20, flex: 1 }}>
                        <FlatList style={{ flex: 3 }}
                            data={data}
                            renderItem={renderList}
                            horizontal={false}
                            numColumns={2}
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>



                </View>


            </SafeAreaView>
        </>
    );
}
const Styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.dashBg,
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'yellow'
    },

})


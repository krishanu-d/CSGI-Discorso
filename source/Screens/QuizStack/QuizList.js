import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StatusBar, StyleSheet, TextInput, KeyboardAvoidingView, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { Colors } from '../../Common/Colors';
import FastImage from 'react-native-fast-image';
import { Icons, Images } from '../../Assets/Asset';
import CommonButton from '../../Common/CommonButton';
import { Fonts } from '../../Common/Fonts';
import { useScrollToTop } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';



const screenHeight = Dimensions.get('screen').height
const screenwidth = Dimensions.get('window').width

export default function QuizList(props) {
    let QuizData = [
        {
            id: '1',
            name: 'Quiz 1'
        },
        {
            id: '2',
            name: 'Quiz 2'
        },
        {
            id: '3',
            name: 'Quiz 3'
        },
        {
            id: '4',
            name: 'Quiz 4'
        },
        {
            id: '5',
            name: 'Quiz 5'
        }

    ];

    const quizSelect = (item) => {

        props.navigation.navigate('Quiz', { name: item.name });

    }

    const renderAccountOptions = ({ item, index }) => {
        return (

            <>
                <TouchableOpacity onPress={() => { quizSelect(item) }} style={{ borderRadius: 10, }}>
                    <View style={{ width: screenwidth * 0.45, height: 90, backgroundColor: Colors.bgWhite, borderRadius: 10, marginBottom: 10, marginHorizontal: 5 }}>
                        <View style={{ justifyContent: 'space-between', height: '100%', padding: 10 }}>
                            <Text style={{ fontSize: 17, fontFamily: Fonts.Regular, color: Colors.bgBlack }}>{item.name}</Text>
                        </View>

                    </View>
                </TouchableOpacity>


            </>
        );
    };

    return (
        <>
            <StatusBar
                translucent
                barStyle='light-content'
                backgroundColor={Colors.navyBlue}
            />
            <View style={Styles.mainContainer}>
                <View style={{ width: screenwidth * .97, height: '100%' }}>

                    <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>

                        <View style={{ backgroundColor: Colors.logoBg, height: 45, width: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 80, }}>
                            <FastImage source={Images.Logo} style={{ width: 35, height: 23 }} resizeMode={'contain'} />
                        </View>

                        <View style={{ backgroundColor: Colors.bgGreyColor, height: 45, width: 130, borderRadius: 50, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, }}>

                            <Text style={{ paddingHorizontal: 10, width: '70%', color: Colors.navyBlue }} numberOfLines={1}>Name</Text>

                            <View style={{ backgroundColor: 'red', height: 30, width: 30, borderRadius: 50 }}>
                            </View>

                        </View>

                    </View>



                    <View>
                        <Text style={{ color: Colors.heading, fontFamily: Fonts.Bold, fontSize: 28 }}>Quiz</Text>
                    </View>
                    <View style={{ marginTop: 20, flex: 1 }}>
                        <FlatList style={{ flex: 3 }}
                            data={QuizData}
                            renderItem={renderAccountOptions}
                            horizontal={false}
                            numColumns={2}
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>



                </View>

            </View>
        </>
    );
}
const Styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.dashBg,
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'yellow'
    },

})


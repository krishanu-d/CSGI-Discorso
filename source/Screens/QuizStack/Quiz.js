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

export default function Quiz(props) {

    // console.log(props.route.params.name)
    const quizName = props.route.params.name;
    const [startQuiz, setStartQuiz] = useState(false);

    const quizStart = () => {
        setStartQuiz(true);

    }





    return (
        <>
            <StatusBar
                translucent
                barStyle='light-content'
                backgroundColor={Colors.navyBlue}
            />
            <View style={Styles.mainContainer}>
                {/* <View style={{}}> */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: Colors.heading, padding: 10 }}>
                    <View style={{ backgroundColor: Colors.logoBg, height: 45, width: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 80, }}>
                        <FastImage source={Images.Logo} style={{ width: 35, height: 23 }} resizeMode={'contain'} />
                    </View>

                    <View style={{ backgroundColor: Colors.bgGreyColor, height: 45, width: 130, borderRadius: 50, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, }}>
                        <Text style={{ paddingHorizontal: 10, width: '70%', color: Colors.navyBlue }} numberOfLines={1}>Name</Text>
                        <View style={{ backgroundColor: 'red', height: 30, width: 30, borderRadius: 50 }}>
                        </View>
                    </View>
                </View>
                {/* </View> */}

                <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, width: screenwidth * 0.97, alignSelf: 'center' }} >

                    <View>
                        <Text style={{ color: Colors.heading, fontFamily: Fonts.Bold, fontSize: 28 }}>{quizName}</Text>
                    </View>

                    {!startQuiz &&
                        <View style={{ width: '80%', alignSelf: 'center', marginTop: screenHeight * 0.15 }}>
                            <Text style={{ color: Colors.navyBlue, fontSize: 16, fontFamily: Fonts.SemiBold, textAlign: 'center', padding: 10 }}> Once You start the quiz, a timer for 30 mins will start, you will have to submit your answers before that, or else the answered questions will automatically be submitted and the quiz terminated.</Text>
                            <CommonButton title='Start the quiz' onPress={quizStart} backgroundColor={Colors.bgWhite} style={{ height: 50, minWidth: '80%' }} borderRadius={10} textStyle={{ color: Colors.navyBlue, fontSize: 16, fontFamily: Fonts.Bold }} />
                        </View>
                    }



                </ScrollView>
            </View>
        </>
    );
}
const Styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.dashBg,
        flex: 1,
        height: '100%'
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'yellow'
    },

})


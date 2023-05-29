import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StatusBar, StyleSheet, TextInput, KeyboardAvoidingView, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { Colors } from '../../Common/Colors';
import FastImage from 'react-native-fast-image';
import { Icons, Images } from '../../Assets/Asset';
import CommonButton from '../../Common/CommonButton';
import { Fonts } from '../../Common/Fonts';
import { useIsFocused, useScrollToTop } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../Common/Header';
import { getAllQuiz } from '../../Common/DatabaseService';



const screenHeight = Dimensions.get('screen').height
const screenwidth = Dimensions.get('window').width

export default function QuizList(props) {
    const isFocused = useIsFocused()
    const [QuizData, setQuizData] = useState([]);
    const [noData, setNoData] = useState(false);

    useEffect(() => {
        if (isFocused) {

            getAllquizData();
        }
    }, [isFocused])


    const getAllquizData = async () => {
        let response = await getAllQuiz()
        // console.log('response bhr wala', JSON.stringify(response));
        if (response.status == 200) {
            setNoData(false)
            setQuizData(response.data.result)
            // console.log('response.data', response.data.result);
        }
        else {
            // console.log('error', response);
            setNoData(true);

        }
    }


    const quizSelect = (item) => {

        props.navigation.navigate('Quiz', { data: item });

    }

    const renderAccountOptions = ({ item, index }) => {
        // console.log('item', item);
        return (

            <>
                <TouchableOpacity onPress={() => { quizSelect(item) }} style={{ borderRadius: 10, }}>
                    <View style={{ width: screenwidth * 0.45, height: 90, backgroundColor: Colors.bgWhite, borderRadius: 10, marginBottom: 10, marginHorizontal: 5 }}>
                        <View style={{ justifyContent: 'space-between', height: '100%', padding: 10 }}>
                            <Text style={{ fontSize: 17, fontFamily: Fonts.Regular, color: Colors.bgBlack }}>{item.company_name}</Text>
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
                <Header />

                <View>
                    <Text style={{ color: Colors.heading, fontFamily: Fonts.Bold, fontSize: 28, paddingHorizontal: 10 }}>Quiz</Text>
                </View>
                {
                    noData ?
                        <View style={{ width: '80%', alignSelf: 'center', marginTop: screenHeight * 0.15 }}>
                            <Text style={{ color: Colors.navyBlue, fontSize: 16, fontFamily: Fonts.SemiBold, textAlign: 'center', padding: 10 }}>No Quizes Yet. Please Contact the Admin.</Text>
                        </View>
                        :
                        <FlatList style={{ alignSelf: 'center' }}
                            data={QuizData}
                            renderItem={renderAccountOptions}
                            horizontal={false}
                            numColumns={2}
                            keyExtractor={(item) => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                }





            </View>

        </>
    );
}
const Styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: Colors.dashBg,
        // flex: 1,
        height: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'yellow'
    },

})


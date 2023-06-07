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
import Header from '../../Common/Header';
import { getQuizQuestions } from '../../Common/DatabaseService';

const screenHeight = Dimensions.get('screen').height
const screenwidth = Dimensions.get('window').width

export default function Quiz(props) {

    // console.log(props.route.params.data)


    const quizName = props.route.params.data.company_name;
    const [startQuiz, setStartQuiz] = useState(false);
    const [questions, setQuestions] = useState(null);
    const [noData, setNoData] = useState(true);
    const [answers, setAnswers] = useState([]);
    // const [selectedAnswer, setSelectedAnswer] = useState({});
    // const [endQuiz, setEndQuiz] = useState(false);

    const quizStart = () => {
        setStartQuiz(true);
        getQuestions();
    }

    const getQuestions = async () => {
        let response = await getQuizQuestions(props.route.params.data.id);
        // console.log('response', response.data);
        if (response.status == 200) {
            setNoData(false);
            let finalQuestions = response.data?.result.map((item) => {
                return {
                    question: item.question,
                    answer: item.answer.map((item) => {
                        return {
                            answer: item.answer,
                            ques_id: item.ques_id,
                            id: item.id,
                            selected: false
                        }
                    })
                }
            });
            // setQuestions(response.data.result);
            setQuestions(finalQuestions);
            // console.log('item', item);
            // console.log('questionssssssssssssssssssssssss', finalQuestions.map((item) => item.answer));
        } else {
            setNoData(true);
        }
    }

    // useEffect(() => {
    //     setEndQuiz(true);
    // }, [questions == []])

    const answerSelection = (item) => {
        
        item.selected = true;


        let ans = {
            quiz_id: props.route.params.data.id,
            question_id: item.ques_id,
            selected_answer_is: item.id
        }
        // console.log('ans', ans);
        setAnswers(answer => [...answer, ans]);
        console.log('selected answer item', item);
        



    }

    const renderAccountOptions = ({ item, index }) => {
        // console.log('item', item);
        return (
            <View style={{ width: screenwidth * 0.95, backgroundColor: Colors.bgWhite, marginBottom: 10, borderRadius: 5, padding: 10 }} key={item.question.id}>
                <Text style={{ color: Colors.navyBlue, fontFamily: Fonts.Medium, fontSize: 15 }}>
                    {/* {index + 1}. */}
                    {item.question.question}</Text>

                <View style={{ flexDirection: 'column', marginTop: 10 }}>

                    {
                        item.answer.map((item) => {
                            // console.log('item', item);
                            return (
                                <TouchableOpacity onPress={() => { answerSelection(item) }} style={{ backgroundColor: item.selected ? Colors.btnColor: Colors.bgGrey1, width: '90%', borderRadius: 10, marginTop: 5 }}  >
                                    <Text style={{ color: Colors.navyBlue, fontFamily: Fonts.Regular, fontSize: 14, padding: 5 }}>{item.answer}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }


                </View>
            </View>

        )
    }



    const submitAnswers = () => {
        console.log('selected answer', answers);
        // console.log('questions', questions);
        setTimeout(() => {

            props.navigation.navigate('QuizList');
        }, 2000);


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
                <Header />
                {/* </View> */}

                <View style={{ flex: 1, width: screenwidth * 0.97, alignSelf: 'center' }} >

                    <View>
                        <Text style={{ color: Colors.heading, fontFamily: Fonts.Bold, fontSize: 28 }}>{quizName}</Text>
                    </View>

                    {!startQuiz &&
                        <View style={{ width: '80%', alignSelf: 'center', marginTop: screenHeight * 0.15 }}>
                            <Text style={{ color: Colors.navyBlue, fontSize: 16, fontFamily: Fonts.SemiBold, textAlign: 'center', padding: 10 }}> Once You start the quiz, a timer for 30 mins will start, you will have to submit your answers before that, or else the answered questions will automatically be submitted and the quiz terminated.</Text>
                            <CommonButton title='Start the quiz' onPress={quizStart} backgroundColor={Colors.bgWhite} style={{ height: 50, minWidth: '80%' }} borderRadius={10} textStyle={{ color: Colors.navyBlue, fontSize: 16, fontFamily: Fonts.Bold }} />
                        </View>
                    }

                    {
                        startQuiz && noData ?
                            <View style={{ width: '80%', alignSelf: 'center', marginTop: screenHeight * 0.15 }}>
                                <Text style={{ color: Colors.navyBlue, fontSize: 16, fontFamily: Fonts.SemiBold, textAlign: 'center', padding: 10 }}>No Questions Yet. Please Contact the Admin.</Text>
                            </View>
                            :

                            <FlatList style={{ alignSelf: 'center' }}
                                data={questions}
                                renderItem={renderAccountOptions}
                                horizontal={false}
                                numColumns={1}
                                keyExtractor={(item) => item.question.id}
                                showsVerticalScrollIndicator={false}
                                extraData={questions}
                            />
                    }
                    {/* 
                    {
                        endQuiz && 
                        <View style={{ width: '80%', alignSelf: 'center', marginTop: screenHeight * 0.15 }}>
                            <Text style={{ color: Colors.navyBlue, fontSize: 16, fontFamily: Fonts.SemiBold, textAlign: 'center', padding: 10 }}>You have reached the end of the Quiz, Please Press the Submit button to submit your answers</Text>
                        </View>
                    } */}
                    {questions && !questions.length == 0 &&
                        <View>
                            <CommonButton title='Submit' onPress={() => { submitAnswers() }} backgroundColor={Colors.btnColor} style={{ height: 40, minWidth: '80%', alignSelf: 'center' }} borderRadius={10} textStyle={{ color: Colors.navyBlue, fontSize: 16, fontFamily: Fonts.Bold }} />
                        </View>
                    }


                </View>
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


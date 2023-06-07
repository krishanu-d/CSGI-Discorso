import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StatusBar, StyleSheet, TextInput, KeyboardAvoidingView, Dimensions } from "react-native";
import { Colors } from '../../Common/Colors';
import FastImage from 'react-native-fast-image';
import { Icons, Images } from '../../Assets/Asset';
import CommonButton from '../../Common/CommonButton';
import { Fonts } from '../../Common/Fonts';
import { useScrollToTop, useIsFocused } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../Common/Header';
import { getAllNotices } from '../../Common/DatabaseService';




const screenHeight = Dimensions.get('screen').height
const screenwidth = Dimensions.get('window').width

export default function Dashboard(props) {

    const isFocused = useIsFocused()

    const [notice, setNotice] = useState([]);

    useEffect(() => {
        if (isFocused) {
            Notices();
        }
    }, [isFocused])

    const Notices = async () => {
        let response = await getAllNotices();
        if (response.status == 200) {
            setNotice(response.data.result);
            // console.log('response', response.status);
        } else {
            console.log('response', response.status);
        }
    }

    const RenderNotice = () => {



        // <View style={{ backgroundColor: Colors.bgWhite, padding: 10, borderRadius: 10, marginTop: 10, marginBottom: 10 }}>
        //                     <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
        //                         <Text style={{ color: Colors.bgBlack, fontFamily: Fonts.Bold, fontSize: 20 }}>Notice : </Text>
        //                         <Text style={{ color: Colors.bgBlack }}>23 Mar 2023</Text>
        //                     </View>
        //                     <Text style={{ color: Colors.bgBlack, fontFamily: Fonts.Regular, fontSize: 13 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut volutpat lectus. Sed non diam consectetur, iaculis libero vitae, commodo lectus. Ut congue nisl massa, a fringilla lectus porttitor ac. Aliquam eget mattis leo. Quisque convallis diam purus, ac suscipit elit venenatis nec. Pellentesque sodales elit sollicitudin turpis semper, ut faucibus massa accumsan. Phasellus auctor mauris orci, vel semper massa facilisis nec. Maecenas non interdum leo. Curabitur convallis ligula tortor, eget sodales diam varius a.

        //                         Maecenas pharetra blandit viverra.</Text>

        //                 </View>
        console.log('notice', notice.map((item) => item));
        return (
            <>
                {
                    notice.map((item) => {
                        return (
                            <View style={{ backgroundColor: Colors.bgWhite, padding: 10, borderRadius: 10, marginTop: 10, marginBottom: 10 }} key={item.id}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                                    <Text style={{ color: Colors.bgBlack, fontFamily: Fonts.Bold, fontSize: 20 }}>Notice : </Text>
                                    <Text style={{ color: Colors.bgBlack }}>{item.notice_date}</Text>

                                </View>
                                <Text style={{ color: Colors.bgBlack, fontFamily:Fonts.SemiBold, fontSize:15 }}>{item.notice_heading}</Text>
                                <Text style={{ color: Colors.bgBlack, fontFamily: Fonts.Regular, fontSize: 13 }}>{item.notice_body}</Text>

                            </View>
                        )
                    })
                }
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
            <View style={Styles.mainContainer}>
                <Header />
                <View style={{ width: screenwidth * .97, height: '100%', alignSelf: 'center' }}>

                    {/* logo and account */}

                    {/* logo and account */}
                    <ScrollView showsVerticalScrollIndicator={false} >
                        {/* Notice */}
                        <RenderNotice />

                        <View style={{ backgroundColor: Colors.bgWhite, padding: 10, borderRadius: 10, marginTop: 10, marginBottom: 10 }}>
                            <FastImage source={Images.dash} style={{ height: screenwidth * .8 }} />
                            <Text style={{ color: Colors.bgBlack, fontFamily: Fonts.Regular, fontSize: 13, marginTop: 5 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut volutpat lectus. Sed non diam consectetur, iaculis libero vitae, commodo lectus. Ut congue nisl massa, a fringilla lectus porttitor ac. Aliquam eget mattis leo. Quisque convallis diam purus, ac suscipit elit venenatis nec. Pellentesque sodales elit sollicitudin turpis semper, ut faucibus massa accumsan. Phasellus auctor mauris orci, vel semper massa facilisis nec.  </Text>
                        </View>
                        {/* Notice */}

                    </ScrollView>
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
        // alignItems: 'center',
        height: '100%',
        // width: '100%'w
    },

})


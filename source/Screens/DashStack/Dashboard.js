import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StatusBar, StyleSheet, TextInput, KeyboardAvoidingView, Dimensions } from "react-native";
import { Colors } from '../../Common/Colors';
import FastImage from 'react-native-fast-image';
import { Icons, Images } from '../../Assets/Asset';
import CommonButton from '../../Common/CommonButton';
import { Fonts } from '../../Common/Fonts';
import { useScrollToTop } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';



const screenHeight = Dimensions.get('screen').height
const screenwidth = Dimensions.get('window').width

export default function Dashboard(props) {

    return (
        <>
            <StatusBar
                translucent
                barStyle='light-content'
                backgroundColor={Colors.navyBlue}
            />
            <View style={Styles.mainContainer}>
                <View style={{ width: screenwidth * .97 , height:'100%'}}>

                    {/* logo and account */}
                    <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom:10 }}>

                        <View style={{ backgroundColor: Colors.logoBg, height: 45, width: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 80, }}>
                            <FastImage source={Images.Logo} style={{ width: 35, height: 23 }} resizeMode={'contain'} />
                        </View>

                        <View style={{ backgroundColor: Colors.bgGreyColor, height: 45, width: 130, borderRadius: 50, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, }}>

                            <Text style={{ paddingHorizontal: 10, width: '70%', color: Colors.navyBlue }} numberOfLines={1}>Name</Text>

                            <View style={{ backgroundColor: 'red', height: 30, width: 30, borderRadius: 50 }}>
                            </View>

                        </View>

                    </View>
                    {/* logo and account */}
                    <ScrollView showsVerticalScrollIndicator={false} >
                        {/* Notice */}
                        <View style={{ backgroundColor: Colors.bgWhite, padding: 10, borderRadius: 10, marginTop: 10, marginBottom: 10 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
                                <Text style={{ color: Colors.bgBlack, fontFamily: Fonts.Bold, fontSize: 20 }}>Notice : </Text>
                                <Text style={{ color: Colors.bgBlack }}>23 Mar 2023</Text>
                            </View>
                            <Text style={{ color: Colors.bgBlack, fontFamily:Fonts.Regular, fontSize:13 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut volutpat lectus. Sed non diam consectetur, iaculis libero vitae, commodo lectus. Ut congue nisl massa, a fringilla lectus porttitor ac. Aliquam eget mattis leo. Quisque convallis diam purus, ac suscipit elit venenatis nec. Pellentesque sodales elit sollicitudin turpis semper, ut faucibus massa accumsan. Phasellus auctor mauris orci, vel semper massa facilisis nec. Maecenas non interdum leo. Curabitur convallis ligula tortor, eget sodales diam varius a.

                                Maecenas pharetra blandit viverra.</Text>

                        </View>

                        <View style={{ backgroundColor: Colors.bgWhite, padding: 10, borderRadius: 10, marginTop: 10, marginBottom: 10 }}>
                            <FastImage source={Images.dash} style={{ height:screenwidth*.8 }} />
                            <Text style={{ color: Colors.bgBlack, fontFamily:Fonts.Regular, fontSize:13, marginTop:5 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut volutpat lectus. Sed non diam consectetur, iaculis libero vitae, commodo lectus. Ut congue nisl massa, a fringilla lectus porttitor ac. Aliquam eget mattis leo. Quisque convallis diam purus, ac suscipit elit venenatis nec. Pellentesque sodales elit sollicitudin turpis semper, ut faucibus massa accumsan. Phasellus auctor mauris orci, vel semper massa facilisis nec.  </Text>
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
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },

})


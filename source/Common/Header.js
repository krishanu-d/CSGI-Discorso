import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StatusBar, StyleSheet, TextInput, KeyboardAvoidingView, FlatList, Dimensions, TouchableOpacity } from "react-native";
import { Colors } from '../Common/Colors';
import FastImage from 'react-native-fast-image';
import { Icons, Images } from '../Assets/Asset';
import { Fonts } from '../Common/Fonts';

export default function Header() {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: Colors.bgWhite, padding: 10 }}>
            <View style={{ backgroundColor: Colors.logoBg, height: 45, width: 45, justifyContent: 'center', alignItems: 'center', borderRadius: 80, }}>
                <FastImage source={Images.Logo} style={{ width: 35, height: 23 }} resizeMode={'contain'} />
            </View>

            <View style={{ backgroundColor: Colors.bgGreyColor, height: 45, width: 130, borderRadius: 50, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8 }}>
                <Text style={{ paddingHorizontal: 10, width: '70%', color: Colors.navyBlue, fontFamily: Fonts.Regular }} numberOfLines={1}>Name</Text>
                <View style={{ backgroundColor: 'red', height: 35, width: 35, borderRadius: 50 }}>
                </View>
            </View>
        </View>
    )
}
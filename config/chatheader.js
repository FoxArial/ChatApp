import React from "react";
import { Platform, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Image} from "expo-image";
import COLORS from "../screens/const";
import { blurhash } from "../utils/common";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native"

export default function ChatHeader({user}){
    const navigation = useNavigation();
    return (
        <View style={{backgroundColor: COLORS.background}}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <View style={{flexDirection:'row',alignItems: 'center', gap: 10}}>
                <Image 
                source={{uri: user?.profileURL}}
                style={{height: hp(5), width: wp(11), borderRadius: 999999}}
                placeholder={blurhash}
                transition={500}/>
                <Text style={{fontSize: hp(2.2), color: COLORS.background, fontWeight: 500}}> {user.UserName}</Text>   
                </View>
            
            </View>
        </View>
        )
}
        const styles = StyleSheet.create({
            container:{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: COLORS.primary,
            paddingLeft: 5,
            paddingRight: 5,
            paddingBottom: 6,
            height: hp(6),
            alignItems: "center",
            }
        })
    
    
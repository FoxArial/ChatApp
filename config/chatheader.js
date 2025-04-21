import React from "react";
import { Platform, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Image} from "expo-image";
import COLORS from "../screens/const";
import { blurhash } from "../utils/common";
import Ionicons from '@expo/vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function ChatHeader({user, navigation}){
    const insets = useSafeAreaInsets();
    return (
        <View style={[{backgroundColor: COLORS.background},{paddingTop: insets.top} ]}>
            <View style={styles.container}>
                
                <View style={styles.topElements}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Image 
                source={{uri: user?.profileURL}}
                style={{height: hp(5), width: wp(11), borderRadius: 999999,}}
                placeholder={blurhash}
                transition={500}/>
                <Text style={{fontSize: hp(2.2), color: COLORS.background, fontWeight: 500}}> {user.UserName}</Text>   
                </View>
                <View style={[styles.topElements, {gap:25, paddingRight: wp(3)}]}>
                <Ionicons name="call" size={24} color="white" />
                <Ionicons name="videocam" size={24} color="white" />

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
            paddingHorizontal:8,
            height: hp(7),
            alignItems: "center",
            },
            topElements:{
            flexDirection:'row',
            alignItems: 'center',
            gap: 12,
            }
        })
    
    
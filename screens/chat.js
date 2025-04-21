import React, { useState } from "react";
import { KeyboardAvoidingView,ScrollView, Platform, Text, View,SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import {useRoute} from "@react-navigation/native"
import COLORS from "./const";
import ChatHeader from "../config/chatheader";
import MessageList from "../config/messageList";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomKeyBoard from '../config/CastomKb'
export default function Chat({navigation}) {
const route = useRoute();
const params = route.params;
//console.log('got item:', params);
const [messages, setMessages] = useState([]);
  return (
       <CustomKeyBoard>
        <View  style={{ flex: 1, backgroundColor: COLORS.background}}>
    <ChatHeader user={params} navigation={navigation} />  
    <View style={{ flex: 1, justifyContent: "space-between", overflow:'scroll'}}>
      <View style={{ flex: 1}}>
        <MessageList messages={messages}/>
      </View>
      <View style={styles.inputStyle}>
          <View style={styles.input}>
            <TextInput placeholder="Type something" style={{flex:1, fontSize: hp(1.7),}}/>
          <TouchableOpacity>
          <Ionicons name="send" size={hp(2.7)} color={COLORS.primary} />
          </TouchableOpacity>
          </View>
      </View>
    </View>  
    </View>
    </CustomKeyBoard> 
    
  );
}
const styles = StyleSheet.create({
  inputStyle:{
    paddingTop:2,
    marginBottom:hp(1.7)
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:"center",
    marginHorizontal:3,
  },
  input:{
    flexDirection:"row", 
    justifyContent: 'space-between',
    borderWidth:1,
    padding:2,
    paddingRight:5,
    borderRadius: wp(3),
    borderColor: COLORS.primary,
    backgroundColor: '#ffcccc',
    alignItems: 'center',
    marginHorizontal: 3
  }
})
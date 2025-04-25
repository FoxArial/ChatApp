import React, { useEffect, useRef, useState } from "react";
import { Text, View,SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";
import {useRoute} from "@react-navigation/native"
import COLORS from "./const";
import ChatHeader from "../config/chatheader";
import MessageList from "../config/messageList";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomKeyBoard from '../config/CastomKb'
import {useAuth} from '../config/authContext';
import {getRoomId} from '../utils/common'
import { addDoc, collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { database } from "../config/firebase";

export default function Chat({navigation}) {
const route = useRoute();
const params = route.params;
//console.log('got item:', params);

const [messages, setMessages] = useState([]);
const textRef = useRef('');
const {user} = useAuth();
console.log('uwer',user);
useEffect(()=>{
  createRoomIfNotExist();
},[]);

const createRoomIfNotExist = async () =>{
  //roomId
  let roomId = getRoomId(user?.userId, params?.userID);
  //console.log("getRoomId:",roomId);
  await setDoc(doc(database,"rooms",roomId),{
    roomId,
    createdAt: Timestamp.fromDate(new Date()),
  })
}

const handleTextMsg = async () => {
  let message = textRef.current.trim();
  if(!message) return;
  try {
    let roomId = getRoomId(user?.userId, params?.userID);
    const docRef = doc(database, "rooms",roomId);
    const messagesRef = collection(docRef, 'messages');

    const newDoc = await addDoc(messagesRef,{
      userId: user?.userId,
      text: message,
      profileUrl: user?.profileUrl,
      senderName: user?.username,
      createdAt:  Timestamp.fromDate(new Date())
    })
    console.log ('new msg:', newDoc.id);
  } catch(err){
    console.log('Message', err.message)
  }
}
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
            <TextInput 
            onChangeText={value=> textRef.current = value}
            placeholder="Type something" style={{flex:1, fontSize: hp(1.7),}}/>
          <TouchableOpacity onPress={handleTextMsg}>
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
import React from "react";
import { Text, View,SafeAreaView } from "react-native";
import {useRoute} from "@react-navigation/native"
import COLORS from "./const";
import ChatHeader from "../config/chatheader";

export default function Chat({navigation}) {
const route = useRoute();
const params = route.params;
console.log('got item:', params)

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor: COLORS.background}}>
    <View style={{flex:1}}>   
    <ChatHeader user={params} />    
    <Text> meow</Text>

      </View>    
    </SafeAreaView>
  );
}

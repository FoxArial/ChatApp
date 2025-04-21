import React from "react";
import { KeyboardAvoidingView,ScrollView, Platform} from "react-native";
import COLORS from "../screens/const";

export default function CustomKeyBoard({children}){
return(
<KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={50}>
    <ScrollView 
      style={{ flex: 1}}
      contentContainerStyle={{flex:1}}
      bounces={false}
      showsVerticalScrollIndicator={false}
      >  {
        children
      }
      </ScrollView>    
    </KeyboardAvoidingView>)}
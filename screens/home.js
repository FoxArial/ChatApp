import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { useAuth } from "../config/authContext";

export default function HomeScreen({navigation}) {
  const {logout} = useAuth();
  const handleLogOut = async ()=>{
    await logout();
  }
  return (
    <SafeAreaView style={{ flex: 1}}>
      <Text> Home123</Text>
      <TouchableOpacity  onPress={handleLogOut}>
      <Text> LogOut</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

import React from "react";
import { Text } from "react-native";
import {useRoute} from "@react-navigation/native"

export default function Chat() {
const route = useRoute();
const paramters = route.params;
console.log('got item:', paramters)

  return <Text> Chat with {paramters.UserName}</Text>;
}

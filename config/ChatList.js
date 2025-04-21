import { View, FlatList } from "react-native";
import ChatItem from "./ChatItem";
import React from "react";


export default function ChatList({ users, navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={users}
        contentContainerStyle={{paddingVertical: 25 }}
        keyExtractor={item => Math.random()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => <ChatItem 
            noBorder={index+1 == users.length}
            navigation = {navigation}
            item={item}
            index ={index} />}
      />
    </View>
  );
}

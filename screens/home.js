import React, { useEffect, useState, useRef } from "react";
import { StatusBar } from "react-native";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../config/authContext";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import COLORS from "./const";
import { ActivityIndicator } from "react-native";
import ChatList from "../config/ChatList";
import { where, getDocs, query, doc } from "firebase/firestore";
import { userRef } from "../config/firebase";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen({navigation}) {
  const {logout, user} = useAuth();
  const [users, setUsers] = useState([]);
  const fetchedRef = useRef(false);
  const insets = useSafeAreaInsets();
  useEffect(() => {
    if (user?.uid && !fetchedRef.current) {
      getUsers();
      fetchedRef.current = true;
    }
  }, [user?.uid]);
  
  const getUsers = async () => {
    try {
      const q = query(userRef, where('userID', '!=', user?.uid));
      const querySnapShot = await getDocs(q);
  
      let data = [];
      querySnapShot.forEach(doc => {
        data.push({ ...doc.data()});
      });
      setUsers(data); 
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor: COLORS.background}}>
    <View style={{flex:1}}>        
    {
      users.length>0? (<ChatList users={users} navigation={navigation}/>):(
        <View style={{flex: 1, justifyContent: 'center'}}> 
          <ActivityIndicator size = "large"/>
        </View> 
      )
    }

      </View>    
    </SafeAreaView>
  );
}

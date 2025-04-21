import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContextProvider } from "./config/authContext";
import { useAuth } from "./config/authContext";
import { View, ActivityIndicator } from "react-native";

import Chat from "./screens/chat";
import LoginScreen from "./screens/login";
import HomeScreen from "./screens/home";
import SignUpScreen from "./screens/signup";
import HomeHeader from "./config/homeheader";

import { MenuProvider } from 'react-native-popup-menu';
import COLORS from "./screens/const";
const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }}/>
      <Stack.Screen name="SignUp" component={SignUpScreen}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ 
      headerStyle: {backgroundColor: COLORS.primary} }}>
      <Stack.Screen name="Home"
      component={HomeScreen}
      options={{
        header: ()=> <HomeHeader/>
      }} />
      <Stack.Screen name="Chat" 
      component={Chat}  
      options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

function RootNavigator() {
  const { isAuth } = useAuth();

  if (isAuth === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {isAuth ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <MenuProvider>
  <AuthContextProvider>
  <RootNavigator />
  </AuthContextProvider>
  </MenuProvider>
  )
}

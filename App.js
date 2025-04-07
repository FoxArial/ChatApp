import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Chat from "./screens/chat";
import LoginScreen from "./screens/login";
import HomeScren from "./screens/home";
import SignUpScreen from "./screens/signup";

const Stack = createStackNavigator();

function ChatStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Home" component={HomeScren} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <ChatStack />;
    </NavigationContainer>
  );
}

export default function App() {
  return <RootNavigator />;
}

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Image, Keyboard, Platform,
  ScrollView,
  SafeAreaView, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth/web-extension";
import { auth } from "../config/firebase";
import COLORS from "./const";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginOnProc = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          console.log("Auth successed");
          navigation.navigate("Home");
        })
        .catch((error) => Alert.alert("Login Error", error.message));
    } else {
      Alert.alert("Упс!", "Введіть пошту та пароль");
    }
  };

  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background, }}>
    <ScrollView >
     <View style={{flex:1}}>
      <Image source={require("../assets/Login.jpg")} style={styles.imgTop}/>
     </View>

      <View style={styles.container}>
        <View> 
          <Text style={{color: COLORS.primary, fontSize: 55, alignSelf: "center", fontWeight: "bold"}}>ВХІД</Text>
        </View>
        <View style={{flex: 1, marginTop: 10, justifyContent: "center"}}> 
        <TextInput
          placeholder="Пошта"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Пароль"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        </View>
        {/* кнопка та текст*/}
        <View style={{flex: 1, marginTop: 15}}>
        <TouchableOpacity style={styles.button} onPress={LoginOnProc}  >
        <Text style={styles.buttonText}> Увійти</Text>
        </TouchableOpacity>
         
        <TouchableOpacity style={{marginTop: 5, alignItems: "center"}} onPress={() => navigation.navigate("SignUp")}>
        <Text style={{color: COLORS.primary, fontSize: 18}}>Зареєструватись</Text>
        </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
    </SafeAreaView>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  imgTop: {
    height: hp(45),
    width: "100%",
    resizeMode: "contain"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    marginBottom:  hp(6),
  },
  input: {
    height: hp(6),
    borderColor: COLORS.border,
    backgroundColor: COLORS.inputBg,
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    fontSize: 16,
    borderRadius: 10,
    justifyContent: "center"
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    height: hp(6),
    justifyContent: "center"
  },
  buttonText: {
    color: COLORS.background,
    fontSize: 18,
  }
});

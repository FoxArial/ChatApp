import React, {useState}from "react";
import { StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Image, Keyboard, Platform,
  ScrollView,
  SafeAreaView, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from "../config/firebase";
import COLORS from "./const";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { doc, setDoc } from "firebase/firestore";

export default function SignUpScreen({navigation}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [UserName, setUserName] = useState("");
  const [profileURL, setProfileURL] = useState("");

  const SignUpOnProc = async () => {
  if (email !== "" && password !== "" && UserName !== "" && profileURL !== "") {
    let response;    
    try {
      response = await createUserWithEmailAndPassword(auth, email, password);
      
      await setDoc(doc(database,"users", response?.user?.uid),{
        UserName, profileURL, userID: response?.user?.uid
      });
      console.log("User created", response?.user);
      navigation.navigate("Home");
      return {success: true, data: response?.user};
    } catch (error) {
      console.log(error.message);
      Alert.alert("Error:", error.message);
      return {success: false, data: response?.user};
    }
  } else {
    Alert.alert("Упс!", "Де інформація?");
  }
};  
    
  
  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background, }}>
    <ScrollView>
     <View style={{flex:1}}>
      <Image source={require("../assets/SignUP.jpg")} style={styles.imgTop}/>
     </View>

      <View style={styles.container}>
        <View> 
          <Text style={{color: COLORS.primary, fontSize: 55, alignSelf: "center", fontWeight: "bold"}}> РЕЄСТРАЦІЯ</Text>
        </View>
        <View style={{flex: 1, marginTop: 10, justifyContent: "center"}}> 
        <TextInput
          placeholder="Ім'я"
          value={UserName}
          onChangeText={setUserName}
          style={styles.input}
        />
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
        <TextInput
          placeholder="Картинка профілю"
          value={profileURL}
          onChangeText={setProfileURL}
          style={styles.input}
        />
        </View>
        {/* кнопка та текст*/}
        <View style={{flex: 1, marginTop: 15 }}>
        <TouchableOpacity style={styles.button} onPress={SignUpOnProc}  >
        <Text style={styles.buttonText}> Зареєструватись</Text>
        </TouchableOpacity>
         
        <TouchableOpacity style={{marginTop: 5, alignItems: "center"}} onPress={() => navigation.navigate("Login")}>
        <Text style={{color: COLORS.primary, fontSize: 18}}>Увійти</Text>
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

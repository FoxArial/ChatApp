import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableHighlight,
  Image,
  Button,
  Alert,
  ImageBackground,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth/web-extension";
import { auth } from "../config/firebase";
import MaskedView from "@react-native-masked-view/masked-view";
const bgPhoto = require("../assets/bg-logo.jpg");

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LogingOnProc = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Auth success"))
        .catch((error) => Alert.alert("Login hehe", error.message));
    }
  };

  return (
    <View style={{ flex: 1, height: "100%" }}>
      <MaskedView
        style={{ flex: 1, flexDirection: "row", height: 200 }}
        maskElement={
          <View style={styles.MaskedViewElement}>
            <Text
              style={{
                fontSize: 150,
                color: "black",
                fontWeight: "bold",
              }}
            >
              Hello
            </Text>
          </View>
        }
      >
        <View>
          <Image source={bgPhoto} />
        </View>
      </MaskedView>

      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <Button title="Login" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MaskedViewElement: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    height: "75%",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

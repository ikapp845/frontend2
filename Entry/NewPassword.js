import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useState, useContext, useEffect } from "react";
import BackgroundColour from "../Styles/Background";
import { UserContext, PasswordContext } from "../Sections/Entry";
import { uri } from "../Link";
import axios from "axios";

export default function NewPassword({ navigation }) {
  const [state, setState] = useState(false);
  const [repassword, setRepassword] = useState();
  const [usernameerror, setUsernameerror] = useState(false);
  const [password, setPassword] = useContext(PasswordContext);

  useEffect(() => {
    if (repassword === "") {
      setState(false);
    } else {
      setState(true);
    }
  }, [repassword]);
  // var user = "";
  return (
    <View style={BackgroundColour.back}>
      <View style={styles.headview}>
        <Text style={styles.head}>Enter a New Password</Text>
      </View>
      <TextInput
        placeholder="password"
        style={[
          styles.box,
          { marginTop: 68, backgroundColor: "white", paddingLeft: 20 },
        ]}
        placeholderTextColor={"rgba(0,0,0,0.2 )"}
        value={password}
        secureTextEntry={true}
        onChangeText={(e) => {
          setPassword(e);
          if (password !== "") {
            setState(true);
          }
        }}
      ></TextInput>
      <TextInput
        placeholder="re-enter password"
        style={[
          styles.box,
          { marginTop: 20, backgroundColor: "white", paddingLeft: 20 },
        ]}
        secureTextEntry={true}
        placeholderTextColor={"rgba(0,0,0,0.2 )"}
        value={repassword}
        onChangeText={(e) => {
          setRepassword(e);
          if (repassword !== "") {
            setState(true);
          }
        }}
      ></TextInput>
      <Text style={[usernameerror ? styles.errr : { display: "none" }]}>
        *The password do not match
      </Text>
      <TouchableOpacity
        style={[state ? styles.instyle : styles.outstyle, styles.box]}
        onPress={() => {
          if (password != repassword) {
            setUsernameerror(true);
          } else {
            navigation.navigate("Username");
          }
        }}
      >
        <View style={styles.signbox}>
          <Text style={styles.sign}>Continue</Text>
          {/* <Text>Add The right arrow here</Text> */}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headview: {
    width: "89%",
    justifyContent: "center",
  },
  head: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 22,
    color: "white",
  },
  box: {
    width: "83%",
    height: 70,
    marginLeft: "8.5%",
    marginRight: "8.5%",
    paddingLeft: "8.5%",
    paddingRight: "8.5%",
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: 16,
  },
  instyle: {
    backgroundColor: "#51f6cf",
  },
  outstyle: {
    backgroundColor: "#51f6cf",
    opacity: 0.5,
  },
  sign: {
    color: "white",
    fontSize: 16,
    marginRight: 30,
  },
  signbox: {
    flexDirection: "row",
  },
  errr: {
    paddingLeft: "12.5%",
    color: "red",
  },
});

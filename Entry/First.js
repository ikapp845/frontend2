import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import BackgroundColour from "../Styles/Background";
import { useState, useEffect } from "react";
import axios from "axios";
import { uri } from "../Link";

export default function First({ navigation }) {
  const [user, setUser] = useState("");
  const [mail, setMail] = useState();
  const [state, setState] = useState(false);
  const [usernameerror, setUsernameerror] = useState(false);
  useEffect(() => {
    if (mail === "") {
      setState(false);
    } else {
      setState(true);
    }
  }, [mail]);
  return (
    <View style={BackgroundColour.back}>
      <View>
        <Text>IK</Text>
      </View>
      <TextInput
        placeholder="@email"
        style={[
          styles.box,
          { marginTop: 68, backgroundColor: "white", paddingLeft: 20 },
        ]}
        placeholderTextColor={"rgba(0,0,0,0.2 )"}
        value={mail}
        onChangeText={(e) => {
          setMail(e);
          if (mail !== "") {
            setState(true);
          }
        }}
      ></TextInput>
      <Text style={[usernameerror ? styles.errr : { display: "none" }]}>
        *The username is already taken
      </Text>
      <TouchableOpacity
        style={[state ? styles.instyle : styles.outstyle, styles.box]}
        onPress={() => {
          axios
            .post(uri + "user/check_username/", {
              username: mail,
            })
            .then((result) => {
              console.log(result.data);
              if (result.data == "Success") {
                navigation.navigate("OTP");
              } else {
                setUsernameerror(true);
              }
            })
            .catch((err) => {
              alert(err.data);
            });
        }}
      >
        <View style={styles.signbox}>
          <Text style={styles.sign}>Continue</Text>
          {/* <Text>Add The right arrow here</Text> */}
        </View>
      </TouchableOpacity>
      <View style={{ alignItems: "center" }}>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            width: "85%",
            marginTop: 15,
          }}
        >
          By continuing you're agreeing to our Terms of Service and Privacy
          Policy
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  google: {
    alignItems: "center",
    justifyContent: "center",
    width: "83%",
    backgroundColor: "white",
    height: 60,
    borderRadius: 50,
    marginLeft: "8.5%",
    flexDirection: "row",
  },
  googletext: {
    textAlign: "center",
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold",
  },
  instyle: {
    backgroundColor: "#51f6cf",
  },
  outstyle: {
    backgroundColor: "#51f6cf",
    opacity: 0.5,
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

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import BackgroundColour from "../Styles/Background";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { uri } from "../Link";
import { EmailContext, ProfileContext } from "../Second";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function First({ navigation }) {
  const [email, setEmail] = useContext(EmailContext);
  const [state, setState] = useState(false);
  const [usernameerror, setUsernameerror] = useState(false);

  const storedata = async () => {
    try {
      const value = await AsyncStorage.getItem("profile");
      if (value !== null) {
        const pr = value;
        navigation.navigate("Question", { pr });
      } else {
        console.log("as");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    storedata();
  }, []);

  useEffect(() => {
    if (email === "") {
      setState(false);
    } else {
      setState(true);
    }
  }, [email]);

  return (
    <View style={BackgroundColour.back}>
      <View
        style={{
          marginTop: 100,
          marginBottom: 100,
        }}
      >
        <Text style={styles.maintext}>ik</Text>
      </View>
      <View></View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: "white",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop: 68,
          },
        ]}
      >
        <Text style={{ marginRight: 10 }}>+91</Text>
        <TextInput
          placeholder="@phonenumber"
          // style={[
          //   styles.box,
          //   { marginTop: 68, backgroundColor: "white", paddingLeft: 20 },
          // ]}
          placeholderTextColor={"rgba(0,0,0,0.2 )"}
          value={email}
          onChangeText={(e) => {
            setEmail(e);
            if (email !== "") {
              setState(true);
            }
          }}
        ></TextInput>
      </View>
      <Text style={[usernameerror ? styles.errr : { display: "none" }]}>
        *The username is already taken
      </Text>
      <TouchableOpacity
        style={[state ? styles.instyle : styles.outstyle, styles.box]}
        onPress={() => {
          axios
            .get(uri + "user/check_username/" + email)
            .then((result) => {
              navigation.navigate("OTP");
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
  maintext: {
    // fontFamily: "PaytoneOne_400Regular",
    fontSize: 100,
    color: "white",
    textAlign: "center",
  },
});

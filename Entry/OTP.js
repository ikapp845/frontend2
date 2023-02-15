import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import BackgroundColour from "../Styles/Background";
import { useRef, useState, useEffect } from "react";

export default function OTP() {
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const ref_input5 = useRef();
  const ref_input6 = useRef();

  return (
    <View style={BackgroundColour.back}>
      <View style={styles.headview}>
        <Text style={styles.head}>Enter OTP received on your mail</Text>
      </View>
      <View style={styles.otp}>
        <TextInput
          style={styles.box}
          autoFocus={true}
          keyboardType="number-pad"
          onChangeText={(e) => {
            if (e) {
              ref_input2.current.focus();
            }
          }}
        />
        <TextInput
          style={styles.box}
          autoFocus={true}
          keyboardType="number-pad"
          onChangeText={(e) => {
            if (e) {
              ref_input3.current.focus();
            }
          }}
          ref={ref_input2}
        />
        <TextInput
          style={styles.box}
          autoFocus={true}
          keyboardType="number-pad"
          onChangeText={(e) => {
            if (e) {
              ref_input4.current.focus();
            }
          }}
          ref={ref_input3}
        />
        <TextInput
          style={styles.box}
          autoFocus={true}
          keyboardType="number-pad"
          onChangeText={(e) => {
            if (e) {
              ref_input5.current.focus();
            }
          }}
          ref={ref_input4}
        />
        <TextInput
          style={styles.box}
          autoFocus={true}
          keyboardType="number-pad"
          onChangeText={(e) => {
            if (e) {
              ref_input6.current.focus();
            }
          }}
          ref={ref_input5}
        />
        <TextInput
          style={styles.box}
          keyboardType="number-pad"
          ref={ref_input6}
        />
      </View>
      <TouchableOpacity
        style={[styles.instyle, styles.boxx]}
        onPress={() => {}}
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
  box: {
    width: 45,
    height: 45,
    borderColor: "white",
    borderWidth: 2,
    alignItems: "center",
    textAlign: "center",
    borderRadius: 5,
    marginRight: 5,
    marginLeft: 5,
  },
  otp: {
    flexDirection: "row",
    justifyContent: "center",
  },
  headview: {
    width: "89%",
    justifyContent: "center",
    marginBottom: 20,
  },
  head: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 22,
    color: "white",
  },
  boxx: {
    width: "83%",
    height: 70,
    marginLeft: "8.5%",
    marginRight: "8.5%",
    paddingLeft: "8.5%",
    paddingRight: "8.5%",
    alignItems: "flex-start",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: 40,
  },
  sign: {
    color: "white",
    fontSize: 16,
    marginRight: 30,
  },
  signbox: {
    flexDirection: "row",
  },
  instyle: {
    backgroundColor: "#51f6cf",
    marginTop: 20,
  },
});

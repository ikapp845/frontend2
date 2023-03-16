import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import BackgroundColour from "../Styles/Background";
import { useState } from "react";
import axios from "axios";

export default function AskQuestion() {
  let ques;
  const [count, setCount] = useState(0);
  return (
    <View
      style={[BackgroundColour.back, { alignItems: "center", paddingTop: 20 }]}
      keyboardShouldPersistTaps="always"
    >
      <View style={styles.main}>
        <View style={styles.footer}>
          <Text
            style={{
              textAlign: "center",
              color: "#7F7F7F",
              fontSize: 12,
            }}
          >
            {count}/60
          </Text>
        </View>
        <TouchableOpacity
          // onPress={() => {
          //   axios
          //     .get("http://localhost:8000/s/")
          //     .then((result) => {
          //       console.log(result.data);
          //     })
          //     .catch((err) => {
          //       console.log("ss" + err);
          //     });
          // }}
          style={{
            position: "absolute",
            bottom: 10,
            right: 20,
            backgroundColor: "#51F6CF",
            padding: 10,
            width: 60,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Post</Text>
        </TouchableOpacity>
        <Text style={styles.headertext}>Ask an anonymous question</Text>
        <TextInput
          style={styles.type}
          placeholder="Type..."
          autoFocus={true}
          multiline={true}
          value={ques}
          onChangeText={(e) => {
            ques = e;
            setCount(ques.length);
          }}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    width: "82%",
    height: 343,
    borderRadius: 25,
    position: "relative",
  },
  headertext: {
    color: "#7F7F7F",
    textAlign: "center",
    marginTop: 10,
  },
  type: {
    margin: 15,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 130,
  },
});

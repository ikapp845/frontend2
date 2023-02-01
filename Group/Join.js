import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import BackgroundColour from "../Styles/Background";
import { useState } from "react";
import axios from "axios";
import { uri } from "../Link";

export default function Join({ navigation }) {
  const [link, setLink] = useState("");

  return (
    <View style={BackgroundColour.back}>
      <View style={styles.headview}>
        <Text style={styles.head}>Join Your friends</Text>
      </View>
      <TextInput
        style={[
          styles.save,
          { backgroundColor: "white", paddingLeft: 52, marginTop: 45 },
        ]}
        value={link}
        placeholder={"Paste Link"}
        onChangeText={(e) => {
          setLink(e);
        }}
      ></TextInput>
      <TouchableOpacity
        style={[
          styles.save,
          { backgroundColor: "white", marginTop: 16 },
          link === "" ? { opacity: 0.5 } : { opacity: 1 },
        ]}
        onPress={() => {}}
      >
        <Text style={{ fontSize: 16 }}>Join</Text>
      </TouchableOpacity>

      <View style={[styles.headview]}>
        <Text style={[styles.head, { fontSize: 20, marginTop: 45 }]}>OR</Text>
      </View>
      <TouchableOpacity
        style={[styles.save, { marginTop: 40 }]}
        onPress={() => {
          navigation.navigate("Create");
        }}
      >
        <Text style={{ fontSize: 18, color: "white", marginRight: 2 }}>+</Text>
        <Text style={{ color: "white", fontSize: 18 }}>Create a group</Text>
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
    textAlign: "center",
  },
  save: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#51f6cf",
    width: "83%",
    borderRadius: 30,
    height: 80,
    marginLeft: "8.5%",
    marginTop: 60,
    flexDirection: "row",
  },
});

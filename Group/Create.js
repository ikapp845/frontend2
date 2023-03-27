import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import BackgroundColour from "../Styles/Background";
import { useState } from "react";
import axios from "axios";
import { uri } from "../Link";
import { useContext } from "react";
import { EmailContext } from "../Second";

export default function Create({ navigation }) {
  const [group, setGroup] = useState("");
  const [email] = useContext(EmailContext);

  return (
    <View style={BackgroundColour.back}>
      <View style={styles.headview}>
        <Text style={styles.head}>What's your group name?</Text>
      </View>
      <TextInput
        style={[styles.save, { paddingLeft: 40 }]}
        value={group}
        onChangeText={(e) => {
          setGroup(e);
        }}
        placeholder={"@group name"}
      ></TextInput>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate("Question");
          axios
            .post(uri + "group/create_group/", {
              name: group,
              username: email,
            })
            .then((result) => {
              console.log(result.data);
              navigation.navigate("Contact", {
                group: result.data,
              });
            })
            .catch((err) => {
              alert(err.data);
            });
        }}
        style={[styles.save, { backgroundColor: "#51f6cf", marginTop: 16 }]}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Create</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headview: {
    width: "56%",
    justifyContent: "center",
  },
  head: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 50,
    marginLeft: 22,
    color: "white",
  },
  save: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: "83%",
    borderRadius: 50,
    height: 80,
    marginLeft: "8.5%",
    marginTop: 60,
  },
});

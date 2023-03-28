import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import * as Contacts from "expo-contacts";
import BackgroundColour from "../Styles/Background";
import UserLabel from "./UserLabel";
import RightArrow from "../Icon/RightArrow";
import { uri } from "../Link";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Contact({ navigation, route }) {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [result, setResult] = useState([]);
  const [selected, setSelected] = useState([]);
  const { group } = route.params;

  const getPhoneNumbers = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access contacts was denied");
      return;
    }

    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.PhoneNumbers],
    });

    const numbers = data.reduce((acc, curr) => {
      if (curr.phoneNumbers && curr.phoneNumbers.length > 0) {
        const nums = curr.phoneNumbers.map((phone) => phone.number);
        acc.push(...nums);
      }
      return acc;
    }, []);

    setPhoneNumbers(numbers);
  };

  const sendPhoneNumbers = async () => {
    try {
      const response = await axios.post(uri + "user/get_contacts/", {
        contacts: JSON.stringify(phoneNumbers),
      });
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPhoneNumbers();
  }, []);

  useEffect(() => {
    if (phoneNumbers !== []) {
      sendPhoneNumbers();
    }
  }, [phoneNumbers]);

  return (
    <View
      style={[BackgroundColour.back, { alignItems: "center", widht: "100%" }]}
    >
      <View style={styles.header}>
        <Text style={styles.headertext}>Add Friends</Text>
      </View>
      <View>
        <TextInput placeholder="Search" style={styles.search}></TextInput>
      </View>
      {result !== []
        ? result.map((obj) => (
            <UserLabel
              key={obj.id}
              name={obj.name}
              id={obj.id}
              image={
                "https://profilepicik.s3.amazonaws.com/media/Screenshot_3.png"
              }
              setSelected={setSelected}
              selected={selected}
            ></UserLabel>
          ))
        : ""}

      <TouchableOpacity
        style={[
          styles.bottom,
          { backgroundColor: selected != [] ? "#51F6CF" : "white" },
        ]}
        onPress={() => {
          axios
            .post(uri + "group/add_group_members/", {
              selected: selected,
              group: group,
            })
            .then((result) => {
              let pr;
              (async () => {
                try {
                  const value = await AsyncStorage.getItem("profile");
                  if (value !== null) {
                    pr = value;
                  }
                } catch (error) {
                  console.log(error);
                }
              })();
              if (result.data === "Added") {
                navigation.navigate("Question", { pr });
              }
            })
            .catch((err) => {
              alert(err.data);
            });
        }}
      >
        <RightArrow></RightArrow>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headertext: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 24,
  },
  search: {
    backgroundColor: "white",
    opacity: 0.4,
    width: 335,
    height: 48,
    borderRadius: 15,
    textAlign: "center",
    color: "black",
    marginBottom: 20,
  },
  bottom: {
    position: "absolute",
    opacity: 0.4,
    width: "18%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    bottom: 0,
    left: "41%",
    marginBottom: 30,
  },
});

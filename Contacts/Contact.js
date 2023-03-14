import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect, useContext } from "react";
import * as Contacts from "expo-contacts";
import BackgroundColour from "../Styles/Background";
import UserLabel from "./UserLabel";
import RightArrow from "../Icon/RightArrow";

export default function Contact() {
  useEffect(() => {
    // Retrieve the list of contacts from the device
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync();
        try {
          if (data.length > 0) {
            for (let i = 0; i < data.length + 1; i++) {
              let name = "";
              let numbers = [];
              if (data[i].lastName) {
                name = data[i].firstName + " " + data[i].lastName;
              } else {
                name = data[i].firstName;
              }
              let numbers_count = data[i].phoneNumbers.length;
              var number_set = new Set();
              for (let j = 0; j < numbers_count; j++) {
                var num = data[i].phoneNumbers[j].number;
                if (num.charAt(0) == "+") {
                  num = num.replace("+91", "");
                  num = num.replace(/\s/g, "");
                }
                if (num.length <= 10) {
                  if (number_set.has(num) == false && num != false) {
                    number_set.add(num);
                    numbers.push(num);
                  }
                }
              }
              if (numbers.length > 0) {
                // console.log({ name: name, numbers: numbers });
              }
            }
          }
        } catch {
          return;
        }
      }
    })();
  }, []);
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
      <UserLabel></UserLabel>
      <TouchableOpacity style={styles.bottom}>
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
    backgroundColor: "white",
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

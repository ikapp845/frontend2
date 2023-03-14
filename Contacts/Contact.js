import { View, StyleSheet, Text } from "react-native";
import { useState, useEffect, useContext } from "react";
import * as Contacts from "expo-contacts";

export default function Contact() {
  useEffect(() => {
    // Retrieve the list of contacts from the device
    (async () => {
      setContacts([]);
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
                console.log({ name: name, numbers: numbers });
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
    <View>
      <Text>ksdn</Text>
    </View>
  );
}

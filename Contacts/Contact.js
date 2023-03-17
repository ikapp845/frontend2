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
  const [contacts, setContacts] = useState();
  const [phone, setPhone] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync();
        try {
          if (data.length > 0) {
            // let all = data.map(({ name, phoneNumbers }) => ({
            //   name,
            //   phoneNumbers,
            // }));
            const modifiedArray = data.map((item) => {
              const phoneNumbers = [
                ...new Set(
                  item.phoneNumbers.map((phoneNumber) =>
                    phoneNumber.number
                      .replace(/[\s+]/g, "")
                      .replace("+91", "")
                      .replace("91", "")
                      .replace("0091", "")
                  )
                ),
              ];
              return {
                name: item.name,
                phoneNumbers: phoneNumbers,
              };
            });
            setContacts(modifiedArray);
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

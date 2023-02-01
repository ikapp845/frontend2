import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import BackgroundColour from "../Styles/Background";
import { useContext } from "react";
import Blueheart from "../Icon/Blueheart";
import Pinkheart from "../Icon/Pinkheart";
import Yelllowheart from "../Icon/Yellowheart";
import { GenderContext } from "../Sections/Entry";

export default function Gender({ navigation }) {
  const [gender, setGender] = useContext(GenderContext);
  return (
    <View style={BackgroundColour.back}>
      <View style={styles.headview}>
        <Text style={styles.head}>Confirm your gender</Text>
      </View>
      <View style={styles.genderrow}>
        <View>
          <Pressable
            style={[
              styles.genderbox,
              gender === "boy" ? { backgroundColor: "#51f6cf" } : {},
            ]}
            onPress={() => {
              setGender("boy");
            }}
          >
            <Blueheart></Blueheart>
          </Pressable>
          <Text
            style={[
              styles.gendertext,
              gender === "boy" ? { color: "#51f6cf" } : {},
            ]}
          >
            Boy
          </Text>
        </View>
        <View>
          <Pressable
            style={[
              styles.genderbox,
              gender === "girl" ? { backgroundColor: "#51f6cf" } : {},
            ]}
            onPress={() => {
              setGender("girl");
            }}
          >
            <Pinkheart></Pinkheart>
          </Pressable>
          <Text
            style={[
              styles.gendertext,
              gender === "girl" ? { color: "#51f6cf" } : {},
            ]}
          >
            Girl
          </Text>
        </View>
        <View>
          <Pressable
            style={[
              styles.genderbox,
              gender === "other" ? { backgroundColor: "#51f6cf" } : {},
            ]}
            onPress={() => {
              setGender("other");
            }}
          >
            <Yelllowheart></Yelllowheart>
          </Pressable>
          <Text
            style={[
              styles.gendertext,
              gender === "other" ? { color: "#51f6cf" } : {},
            ]}
          >
            Other
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.save, gender === "" ? { opacity: 0.5 } : { opacity: 1 }]}
        onPress={() => {
          if (gender !== "") {
            navigation.navigate("Pic");
          }
        }}
      >
        <Text>Save</Text>
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
  },
  genderbox: {
    width: 80,
    height: 80,
    backgroundColor: "white",
    borderRadius: 15,
    margin: 7,
    marginBottom: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  genderrow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  gendertext: {
    textAlign: "center",

    color: "white",
  },
  save: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    width: "83%",
    borderRadius: 30,
    height: 80,
    marginLeft: "8.5%",
    marginTop: 30,
  },
});

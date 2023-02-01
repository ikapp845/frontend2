import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import ProfilePic from "./ProfilePic";

export default function Label() {
  return (
    <TouchableOpacity style={styles.label}>
      <ProfilePic val={32} navigation={() => {}}></ProfilePic>
      <Text style={styles.name}>Steve Gates</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  label: {
    backgroundColor: "#f2f2f2",
    width: "88%",
    borderRadius: 55,
    flexDirection: "row",
    alignItems: "center",
    height: 42,
    paddingLeft: 6,
    marginBottom: 8,
  },
  name: {
    marginLeft: 10,
    fontSize: 16,
  },
});

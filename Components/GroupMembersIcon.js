import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GroupMembers from "../Likes/GroupMembers";
import { useState } from "react";

export default function GroupMembersIcon(props) {
  const [modalvisible, setModalvisible] = useState(false);
  return (
    <TouchableOpacity
      style={styles.main}
      onPress={() => {
        setModalvisible(true);
      }}
    >
      <GroupMembers
        modalvisible={modalvisible}
        setModalvisible={setModalvisible}
        group_members={props.group_members}
      ></GroupMembers>
      <View style={[styles.circle, { backgroundColor: "black" }]}></View>
      <View
        style={[styles.circle, { left: 7, backgroundColor: "green" }]}
      ></View>
      <View
        style={[styles.circle, { left: 14, backgroundColor: "red" }]}
      ></View>
      <View
        style={[styles.circle, { left: 21, backgroundColor: "yellow" }]}
      ></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    marginRight: 10,
    flexDirection: "row",
    position: "relative",
    alignItems: "center",
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 20,
    position: "absolute",
  },
});

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import ProfilePic from "../Components/ProfilePic";
import Plus from "../Icon/Plus";
import { useState } from "react";
import RightArrow from "../Icon/RightArrow";

export default function UserLabel() {
  const [active, setActive] = useState(false);

  return (
    <View style={styles.userlabel}>
      <ProfilePic val={48} navigation={() => {}}></ProfilePic>
      <Text style={styles.username}>Username</Text>
      <TouchableOpacity
        style={[
          styles.button,
          active
            ? { backgroundColor: "#D1D5D4" }
            : { backgroundColor: "#51F6CF" },
        ]}
        onPress={() => {
          if (active == true) {
            setActive(false);
          } else {
            setActive(true);
          }
        }}
      >
        {active ? "" : <Plus></Plus>}
        {active ? (
          <Text style={[styles.add, { marginLeft: 0 }]}>Undo</Text>
        ) : (
          <Text style={styles.add}>Add</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  add: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 10,
  },
  username: {
    color: "white",
    fontSize: 16,
    width: "50%",
    marginLeft: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    height: 28,
    width: 70,
    justifyContent: "center",
    borderRadius: 15,
  },
  userlabel: {
    flexDirection: "row",
    alignItems: "center",
  },
});

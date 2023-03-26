import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import ProfilePic from "../Components/ProfilePic";
import Plus from "../Icon/Plus";
import { useState } from "react";
import RightArrow from "../Icon/RightArrow";

export default function UserLabel(props) {
  const [active, setActive] = useState(false);

  function deleteElementFromArray(array, element) {
    const index = array.indexOf(element);
    if (index !== -1) {
      array.splice(index, 1);
    }
    return array;
  }

  return (
    <View style={styles.userlabel}>
      <ProfilePic
        val={48}
        image={props.image}
        navigation={() => {}}
      ></ProfilePic>
      <Text style={styles.username}>{props.name}</Text>
      <TouchableOpacity
        style={[
          styles.button,
          active
            ? { backgroundColor: "#D1D5D4" }
            : { backgroundColor: "#51F6CF" },
        ]}
        onPress={() => {
          if (active == true) {
            const sel = deleteElementFromArray(props.selected, props.id);
            props.setSelected(sel);
            setActive(false);
          } else {
            props.setSelected([...props.selected, props.id]);
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
    marginBottom: 15,
  },
});

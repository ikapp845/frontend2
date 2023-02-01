import { View, Text, StyleSheet, Pressable } from "react-native";
import Vertical from "../Icon/Vertical";

export default function DrawerGroup() {
  return (
    <View style={styles.group}>
      <Text
        style={{
          color: "white",
          fontSize: 16,
          marginLeft: 10,
        }}
      >
        Main
      </Text>
      <Pressable>
        <Vertical></Vertical>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});

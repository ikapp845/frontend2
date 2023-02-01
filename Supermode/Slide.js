import { View, StyleSheet, Image, Text } from "react-native";

export default function Slide(props) {
  return (
    <View style={{ width: "90%" }}>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../Images/ModeThree.png")} />
      </View>
      <Text style={styles.desc}>{props.desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  desc: {
    color: "white",
    textAlign: "center",
    fontSize: 14,
  },
});

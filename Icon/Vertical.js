import { View, StyleSheet } from "react-native";

export default function Vertical() {
  return (
    <View style={{ paddin: 20 }}>
      <View style={styles.dot}></View>
      <View style={styles.dot}></View>
      <View style={styles.dot}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    width: 4,
    height: 4,
    backgroundColor: "white",
    borderRadius: 99,
    margin: 1,
  },
});

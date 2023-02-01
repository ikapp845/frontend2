import { View, StyleSheet, Text } from "react-native";
import Label from "../Components/Label";
import LabelAnswered from "../Components/LabelAnswered";

export default function Question() {
  return (
    <View style={styles.question}>
      <Text style={styles.questiontext}>Who has the cutest smile?</Text>
      <Label></Label>
      {/* Use Scroll View when using the map function to wrap it */}
      <LabelAnswered></LabelAnswered>
    </View>
  );
}

const styles = StyleSheet.create({
  question: {
    backgroundColor: "white",
    width: "81%",
    height: "75%",
    marginTop: 40,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    alignItems: "center",
  },
  questiontext: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#7733ff",
    marginBottom: 20,
  },
});

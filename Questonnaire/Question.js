import { View, StyleSheet, Text } from "react-native";
import Label from "../Components/Label";
import LabelAnswered from "../Components/LabelAnswered";

export default function Question(props) {
  return (
    <View style={styles.question}>
      <Text style={styles.questiontext}>{props.question[1]}</Text>
      {/* Use Scroll View when using the map function to wrap it */}
      {props.group_members
        ? props.group_members.map((obj, index) => {
            if (obj.user.name == "raju") {
              return;
            } else {
              return (
                <Label
                  key={index}
                  name={obj.user.name}
                  questionid={props.question[0]}
                  group={props.group}
                ></Label>
              );
            }
          })
        : ""}
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

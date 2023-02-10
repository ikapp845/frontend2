import { View, StyleSheet, Text } from "react-native";
import Label from "../Components/Label";
import LabelAnswered from "../Components/LabelAnswered";
import axios from "axios";
import { uri } from "../Link";
import { useState, useEffect } from "react";

export default function Question(props) {
  const [resultdata, setResultdata] = useState();
  return (
    <View style={styles.question}>
      <Text style={styles.questiontext}>
        {props.question ? props.question[1] : ""}
      </Text>

      {props.group_members
        ? props.group_members.map((obj, index) => {
            if (obj.user.name == "raju") {
              return;
            } else {
              if (!resultdata) {
                return (
                  <Label
                    key={index}
                    name={obj.user.name}
                    questionid={props.question ? props.question[0] : ""}
                    group={props.group}
                    resultdata={resultdata}
                    setResultdata={setResultdata}
                  ></Label>
                );
              } else {
                return (
                  <LabelAnswered
                    name={obj.user.name}
                    likes={resultdata[obj.user.name].count}
                    total_likes={resultdata["total"]}
                  ></LabelAnswered>
                );
              }
            }
          })
        : ""}
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

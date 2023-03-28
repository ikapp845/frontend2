import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Label from "../Components/Label";
import LabelAnswered from "../Components/LabelAnswered";
import axios from "axios";
import { uri } from "../Link";
import { useState, useEffect } from "react";

export default function Question(props) {
  // function Comp() {
  //   if (props.question[2] == "user") {
  //     return (
  //       <View style={{ textAlign: "center", alignItems: "center" }}>
  //         <Text>Question was asked by someone in the group</Text>
  //         <TouchableOpacity style={{ textAlign: "center" }}>
  //           <Text>Skip</Text>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={{ textAlign: "center" }}>
  //           <Text style={{ color: "red" }}>Report</Text>
  //         </TouchableOpacity>
  //       </View>
  //     );
  //   } else {
  //     return <View></View>;
  //   }
  // }

  return (
    <View style={styles.question}>
      <Text style={styles.questiontext}>
        {props.question ? props.question[1] : ""}
      </Text>

      {props.group_members
        ? props.group_members.map((obj, index) => {
            if (obj.user.name == props.name) {
              return;
            } else {
              if (!props.resultdata) {
                return (
                  <Label
                    key={index}
                    hisno={obj.user.email}
                    myno={props.email}
                    name={obj.user.name}
                    questionid={props.question ? props.question[0] : ""}
                    group={props.group}
                    resultdata={props.resultdata}
                    setResultdata={props.setResultdata}
                    image={obj.user.image_url}
                  ></Label>
                );
              } else {
                return (
                  <LabelAnswered
                    key={index}
                    name={obj.user.name}
                    likes={props.resultdata[obj.user.name].count}
                    total_likes={props.resultdata["total"]}
                    image={props.image}
                  ></LabelAnswered>
                );
              }
            }
          })
        : ""}
      {/* <Comp></Comp> */}
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

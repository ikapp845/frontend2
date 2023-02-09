import { View, Text, StyleSheet, Button, Touchable } from "react-native";
import LikeButton from "../Components/LikeButton";
import BackgroundColour from "../Styles/Background";
import ProfilePic from "../Components/ProfilePic";
import Question from "./Question";
import UsernameSearch from "../Components/UsernameSearch";
import { useState, useEffect } from "react";
import { uri } from "../Link";
import axios from "axios";
import Timer from "./Timer";

export default function Main(props) {
  const [group_members, setGroup_members] = useState();
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [questionnumber, setQuestionnumber] = useState(0);
  const [answered, setAnswered] = useState(false);
  useEffect(() => {
    axios
      .get(uri + "group/group_members/" + props.selectedgroup + "/")
      .then((result) => {
        setGroup_members(result.data);
        setDisplay(result.data);
      })
      .catch((err) => {
        alert("Please check your internet connection");
      });
  }, [props.selectedgroup]);
  useEffect(() => {
    if (search == "" || search == " ") {
      setDisplay(group_members);
    } else {
      if (group_members) {
        var newarray = group_members.filter(function (x) {
          return x.user.name.includes(search.toLowerCase());
        });
        setDisplay(newarray);
      }
    }
  }, [search]);
  useEffect(() => {
    axios
      .get(uri + "group/group_question/" + props.selectedgroup + "/" + "raju")
      .then((result) => {
        setQuestions(result.data);
      })
      .catch((err) => {
        alert;
      });
  }, [props.selectedgroup]);
  return (
    <View
      style={[
        BackgroundColour.back,
        { alignItems: "center", position: "relative" },
      ]}
    >
      <View style={styles.header}>
        <ProfilePic navigation={props.navigation} val={40}></ProfilePic>
        {answered ? (
          <Touchable
            onPress={() => {
              setAnswered(false);
              setQuestionnumber(questionnumber + 1);
            }}
          >
            <Text>Next</Text>
          </Touchable>
        ) : (
          <Text style={styles.slidetext}>1 of 12</Text>
        )}

        <LikeButton></LikeButton>
      </View>
      <Question
        group_members={display}
        question={questions[questionnumber]}
        group={props.selectedgroup}
      ></Question>
      <UsernameSearch serach={search} setSearch={setSearch}></UsernameSearch>
    </View>
  );
}

const styles = StyleSheet.create({
  slidetext: {
    color: "white",
    fontSize: 14,
    marginLeft: "26%",
    marginRight: "26%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});

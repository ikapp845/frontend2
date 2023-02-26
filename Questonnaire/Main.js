import { View, Text, StyleSheet, Button, Touchable } from "react-native";
import LikeButton from "../Components/LikeButton";
import BackgroundColour from "../Styles/Background";
import ProfilePic from "../Components/ProfilePic";
import Question from "./Question";
import UsernameSearch from "../Components/UsernameSearch";
import { useState, useEffect, useContext } from "react";
import { uri } from "../Link";
import axios from "axios";
import Timer from "./Timer";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProfileContext from "../Second";

export default function Main(props) {
  const [group_members, setGroup_members] = useState();
  const [search, setSearch] = useState("");
  const [display, setDisplay] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [questionnumber, setQuestionnumber] = useState(0);
  const [timer, setTimer] = useState(false);
  const [profile] = useContext(ProfileContext);
  const [resultdata, setResultdata] = useState();

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
    axios
      .get(
        uri + "group/group_question/" + props.selectedgroup + "/" + profile.name
      )
      .then((result) => {
        setQuestions(result.data);
      })
      .catch((err) => {
        alert;
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

  return (
    <View
      style={[
        BackgroundColour.back,
        { alignItems: "center", position: "relative" },
      ]}
    >
      <View style={styles.header}>
        <ProfilePic navigation={props.navigation} val={40}></ProfilePic>
        {resultdata ? (
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => {
              setResultdata();
              if (questionnumber == 9) {
                setTimer(true);
              } else {
                setQuestionnumber(questionnumber + 1);
              }
            }}
          >
            <Text
              style={[
                styles.slidetext,
                {
                  backgroundColor: "rgba(200,200,200,0.5)",
                  padding: 10,
                  borderRadius: 15,
                },
              ]}
            >
              Next
            </Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.slidetext}>{questionnumber + 1} of 10</Text>
        )}
        <LikeButton></LikeButton>
      </View>
      {timer ? (
        <Timer></Timer>
      ) : (
        <View
          style={{
            width: "100%",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Question
            group_members={display}
            question={questions[questionnumber]}
            group={props.selectedgroup}
            resultdata={resultdata}
            setResultdata={setResultdata}
          ></Question>
          <UsernameSearch
            serach={search}
            setSearch={setSearch}
          ></UsernameSearch>
        </View>
      )}
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

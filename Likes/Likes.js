import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Pinkheart from "../Icon/Pinkheart";
import Blueheart from "../Icon/Blueheart";
import Yellowheart from "../Icon/Yellowheart";
import axios from "axios";
import { useEffect, useState } from "react";
import { uri } from "../Link";

export default function Likes(props) {
  const [likes, setLikes] = useState();
  useEffect(() => {
    axios
      .get(uri + "like/likes/" + "raju/")
      .then((result) => {
        setLikes(result.data);
      })
      .catch((err) => {
        alert("Please check your internet connection and try again");
      });
  }, []);
  return (
    <ScrollView
      style={{ backgroundColor: "#ffffff", paddingTop: 15, paddingBottom: 20 }}
    >
      {likes
        ? likes.map((obj, index) => {
            let gender;
            let gendertext;
            if (obj.from_gender == "male") {
              gender = <Blueheart></Blueheart>;
              gendertext = "Boy";
            } else if (obj.from_gender == "female") {
              gender = <Pinkheart></Pinkheart>;
              gendertext = "Girl";
            } else {
              gender = <Yellowheart></Yellowheart>;
              gendertext = "Other";
            }
            return (
              <TouchableOpacity
                key={index}
                style={[styles.like, { backgroundColor: "white" }]}
                onPress={() => {
                  props.setQuestion(obj.question);
                  props.setModalvisible(true);
                  props.setUser(obj);
                }}
              >
                {/* background color:"#f0f0f2" for viewed ones*/}
                {gender}
                <Text
                  style={{
                    width: "60%",
                    fontSize: 16,
                    opacity: 0.8700000047683716,
                    marginLeft: 20,
                  }}
                >
                  From a {gendertext}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{ width: 2, height: 2, backgroundColor: "#bcbcbc" }}
                  ></View>
                  {/* <Text style={{ fontSize: 12, color: "#bcbcbc" }}> 2m</Text> */}
                </View>
              </TouchableOpacity>
            );
          })
        : ""}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  like: {
    flexDirection: "row",
    width: "85%",
    marginLeft: "7.5%",
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 60,
    height: 60,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 20,
  },
});

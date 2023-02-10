import { StyleSheet, Text, TouchableOpacity } from "react-native";
import ProfilePic from "./ProfilePic";
import axios from "axios";
import { uri } from "../Link";

export default function Label(props) {
  return (
    <TouchableOpacity
      style={styles.label}
      onPress={() => {
        axios
          .post(uri + "like/", {
            username1: "raju",
            username2: props.name,
            question: props.questionid,
            group: props.group,
            // username1 - from user
            // username2 = to user
          })
          .then((result) => {
            if (result.data === "Liked") {
              axios
                .get(
                  uri +
                    "like/like_count/" +
                    props.group +
                    "/" +
                    props.questionid
                )
                .then((result) => {
                  props.setResultdata(result.data);
                })
                .catch((err) => {
                  alert("Please check your internet connection");
                });
            }
          })
          .catch((err) => {
            alert(err.data);
          });
      }}
    >
      <ProfilePic val={32} navigation={() => {}}></ProfilePic>
      <Text style={styles.name}>{props.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  label: {
    backgroundColor: "#f2f2f2",
    width: "88%",
    borderRadius: 55,
    flexDirection: "row",
    alignItems: "center",
    height: 42,
    paddingLeft: 6,
    marginBottom: 8,
  },
  name: {
    marginLeft: 10,
    fontSize: 16,
  },
});

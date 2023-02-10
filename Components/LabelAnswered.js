import { View, StyleSheet, Text } from "react-native";
import ProfilePic from "./ProfilePic";

export default function LabelAnswered(props) {
  let percentage;
  if (props.likes == undefined) {
    percentage = "18%";
  } else {
    percentage =
      String((Number(props.likes) * 100) / Number(props.total_likes)) + "%";
    if ((Number(props.likes) * 100) / Number(props.total_likes) <= 18) {
      percentage = "18%";
    }
  }
  return (
    <View style={styles.label1}>
      <View style={[styles.label, { width: percentage }]}>
        <ProfilePic val={32} navigation={() => {}}></ProfilePic>
        <Text style={styles.name}>{props.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    backgroundColor: "#b1c0ff",
    borderRadius: 55,
    flexDirection: "row",
    alignItems: "center",
    height: "100%",
    paddingLeft: 6,
  },
  label1: {
    backgroundColor: "#f2f2f2",
    width: "88%",
    borderRadius: 55,
    flexDirection: "row",
    alignItems: "center",
    height: 42,
    marginBottom: 8,
  },
  name: {
    marginLeft: 10,
    fontSize: 16,
    width: 1000,
  },
  icon: {
    position: "absolute",
  },
});

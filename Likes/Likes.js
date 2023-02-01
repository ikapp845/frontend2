import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Pinkheart from "../Icon/Pinkheart";
import Blueheart from "../Icon/Blueheart";
import Yelloheart from "../Icon/Yellowheart";

export default function Likes(props) {
  return (
    <ScrollView style={{ backgroundColor: "#ffffff", paddingTop: 15 }}>
      <TouchableOpacity
        style={[styles.like, { backgroundColor: "white" }]}
        onPress={() => {
          props.setModalvisible(true);
        }}
      >
        {/* background color:"#f0f0f2" for viewed ones*/}
        <Pinkheart></Pinkheart>
        <Text
          style={{
            width: "60%",
            fontSize: 16,
            opacity: 0.8700000047683716,
            marginLeft: 20,
          }}
        >
          From a Girl
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
          <Text style={{ fontSize: 12, color: "#bcbcbc" }}> 2m</Text>
        </View>
      </TouchableOpacity>
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

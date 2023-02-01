import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Pinkheart from "../Icon/Pinkheart";

export default function Friends() {
  return (
    <ScrollView style={{ backgroundColor: "#ffffff", paddingTop: 15 }}>
      <TouchableOpacity style={[styles.like, { backgroundColor: "white" }]}>
        {/* background color:"#f0f0f2" for viewed ones*/}
        <View style={styles.pic}></View>
        <View style={{ width: "65%" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 2,
            }}
          >
            <Text style={{ fontSize: 14 }}>Evan Albon</Text>
            <Text style={{ color: "#828282", fontSize: 10 }}> received</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Pinkheart></Pinkheart>
            <Text> From a Girl</Text>
          </View>
        </View>
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
  pic: {
    width: 32,
    height: 32,
    backgroundColor: "pink",
    borderRadius: 32,
    marginRight: 20,
  },
});

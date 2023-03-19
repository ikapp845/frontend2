import { View, Text, StyleSheet } from "react-native";
import ProfilePic from "../Components/ProfilePic";
import Like from "../Icon/Like";

export default function Members() {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", padding: 24 }}>
      <ProfilePic val={35}></ProfilePic>
      <Text style={{ width: "70%", marginLeft: 15 }}>Username</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Like></Like>
        <Text style={{ marginLeft: 5 }}>123</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

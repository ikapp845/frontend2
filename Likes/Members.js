import { View, Text, StyleSheet } from "react-native";
import ProfilePic from "../Components/ProfilePic";
import Like from "../Icon/Like";

export default function Members(props) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", padding: 20 }}>
      <ProfilePic val={35} image={props.image}></ProfilePic>
      <Text style={{ width: "70%", marginLeft: 15 }}>{props.name}</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Like></Like>
        <Text style={{ marginLeft: 5 }}>{props.likes}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

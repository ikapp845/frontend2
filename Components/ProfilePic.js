import { TouchableOpacity, StyleSheet } from "react-native";

export default function ProfilePic(props) {
  return (
    <TouchableOpacity
      style={[styles.profile, { width: props.val, height: props.val }]}
      onPress={() => {
        props.navigation.openDrawer();
      }}
    ></TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  profile: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "white",
  },
});

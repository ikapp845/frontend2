import { TouchableOpacity, StyleSheet, Image } from "react-native";

export default function ProfilePic(props) {
  return (
    <TouchableOpacity
      style={[styles.profile, { width: props.val, height: props.val }]}
      onPress={() => {
        props.navigation.openDrawer();
      }}
    >
      <Image
        source={{ uri: props.image }}
        style={{ width: "100%", height: "100%" }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  profile: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "grey",
  },
});

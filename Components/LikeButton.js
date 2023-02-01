import { TouchableOpacity, StyleSheet } from "react-native";
import Like from "../Icon/Like";
import { useState } from "react";
import LikePage from "../Likes/LikePage";

export default function LikeButton() {
  const [modalvisible, setModalvisible] = useState(false);
  return (
    <TouchableOpacity
      style={styles.like}
      onPress={() => {
        setModalvisible(true);
      }}
    >
      <LikePage
        modalvisible={modalvisible}
        setModalvisible={setModalvisible}
      ></LikePage>
      <Like></Like>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  like: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.1607843137254902)",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});

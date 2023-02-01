import { View, Modal, StyleSheet, Text, TouchableOpacity } from "react-native";
import LabelAnswered from "../Components/LabelAnswered";

export default function LikeOpen(props) {
  return (
    <Modal
      transparent={true}
      onRequestClose={() => {
        props.setModalvisible(false);
      }}
      visible={props.modalvisible}
      animationType="fade"
    >
      <View style={styles.likeopen}>
        <View style={styles.box}>
          <Text style={styles.question}>Hottest person you ever met</Text>
          <LabelAnswered></LabelAnswered>
        </View>
        <TouchableOpacity
          style={[styles.common, styles.sent, { marginTop: "30%" }]}
        >
          <Text style={styles.text}>Who sent this</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.reply, styles.common]}>
          <Text style={styles.text}>Reply</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  likeopen: {
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.36)",
  },
  box: {
    backgroundColor: "#b793d6",
    height: 200,
    width: "80%",
    borderRadius: 25,
    alignItems: "center",
    padding: 15,
    marginTop: "50%",
  },
  question: {
    color: "white",
    fontSize: 20,
    width: "70%",
    textAlign: "center",
    marginBottom: 40,
  },
  common: {
    width: "80%",
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  sent: {
    backgroundColor: "#8e68c7",
  },
  reply: {
    backgroundColor: "black",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

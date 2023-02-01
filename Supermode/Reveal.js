import { View, Modal, Text, StyleSheet, Image } from "react-native";
import Close from "../Components/Close";

export default function Reveal(props) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalvisible}
      onRequestClose={() => {
        props.setModalvisible(false);
      }}
    >
      <View style={styles.reveal}>
        <View style={styles.pic}></View>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            marginBottom: 20,
          }}
        >
          Some one
        </Text>
        <Close text={"Close"} setModalvisible={props.setModalvisible}></Close>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  reveal: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#b793d6",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    bottom: 0,
    alignItems: "center",
    paddingTop: 70,
    paddingBottom: 20,
  },
  pic: {
    width: 110,
    height: 110,
    borderRadius: 110,
    borderWidth: 5,
    borderColor: "#b793d6",
    position: "absolute",
    backgroundColor: "white",
    alignItems: "center",
    top: -50,
  },
});

import { View, Modal, Text, StyleSheet, Image } from "react-native";
import Close from "../Components/Close";

export default function ThisPerson(props) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalvisible}
      onRequestClose={() => {
        props.setModalvisible(false);
      }}
    >
      <View style={styles.this}>
        <Text style={{ color: "white", fontSize: 16, marginTop: 15 }}>
          Oops! This person uses super mode
        </Text>
        <Image
          style={{ marginBottom: 15, marginTop: 15 }}
          source={require("../Images/Crown.png")}
        />
        <Close text={"Close"} setModalvisible={props.setModalvisible}></Close>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  this: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#b793d6",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    bottom: 0,
    alignItems: "center",
    paddingBottom: 10,
  },
});

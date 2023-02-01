import { View, Modal, Text, StyleSheet, Image } from "react-native";
import Close from "../Components/Close";

export default function Activated(props) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalvisible}
      onRequestClose={() => {
        props.setModalvisible(false);
      }}
    >
      <View style={styles.activated}>
        <Image
          style={{ marginBottom: 15, marginTop: 15 }}
          source={require("../Images/Crown.png")}
        />
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          Super Mode activated
        </Text>
        <Close text={"Close"} setModalvisible={props.setModalvisible}></Close>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  activated: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#b793d6",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    bottom: 0,
    alignItems: "center",
  },
});

import { View, Modal, StyleSheet, Text } from "react-native";
import Close from "../Components/Close";

export default function FirstLetter(props) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalvisible}
      onRequestClose={() => {
        props.setModalvisible(false);
      }}
    >
      <View style={styles.first}>
        <View style={styles.header}></View>
        <Text style={{ fontSize: 16, color: "white", marginTop: 20 }}>
          First letter in their name is...
        </Text>
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 60 }}>
          A
        </Text>
        <Close text={"See full name"} setModalvisible={props.setModalvisible} />
        <Text style={{ color: "#dedede", fontSize: 14, marginBottom: 20 }}>
          You have 2 reveals left
        </Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  first: {
    position: "absolute",
    width: "100%",
    backgroundColor: "#b793d6",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    bottom: 0,
    alignItems: "center",
  },
  header: {
    width: 36,
    height: 4,
    backgroundColor: "white",
    marginTop: 10,
  },
});

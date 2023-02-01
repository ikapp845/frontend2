import { View, Modal, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Popup(props) {
  return (
    <Modal
      animationType="fade"
      visible={props.modalvisible}
      transparent={true}
      onRequestClose={() => {
        props.setModalvisible(false);
      }}
    >
      <View style={styles.pop}>
        <Text style={styles.head}>{props.head}</Text>
        <Text style={styles.head2}>{props.head2}</Text>
        <TouchableOpacity style={styles.leave}>
          <Text style={styles.leavetext}>{props.head3}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancel}
          onPress={() => {
            props.setModalvisible(false);
          }}
        >
          <Text style={styles.canceltext}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  pop: {
    borderRadius: 30,
    width: "73%",
    marginLeft: "13.5%",
    backgroundColor: "white",
    alignItems: "center",
    top: "25%",
  },
  leave: {
    backgroundColor: "#434a54",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    width: "70%",
    height: 40,
  },
  head: {
    opacity: 0.87,
    fontSize: 16,
    marginTop: 30,
    width: "70%",
    textAlign: "center",
  },
  head2: {
    fontSize: 14,
    opacity: 0.87,
    marginTop: 25,
    width: "70%",
    textAlign: "center",
  },
  leavetext: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  canceltext: {
    color: "#434a54",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 32,
  },
});

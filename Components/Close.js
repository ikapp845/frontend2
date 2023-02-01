import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Close(props) {
  return (
    <TouchableOpacity
      style={styles.close}
      onPress={() => {
        if (props.text === "Close") {
          props.setModalvisible(false);
        }
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  close: {
    backgroundColor: "white",
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 50,
    marginBottom: 15,
    marginTop: 15,
  },
});

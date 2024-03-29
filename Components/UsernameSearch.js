import { View, TextInput, StyleSheet } from "react-native";
import Search from "../Icon/Search";

export default function UsernameSearch(props) {
  return (
    <View style={styles.search}>
      <TextInput
        style={styles.input}
        placeholder={"Username"}
        placeholderTextColor={"rgba(0,0,0,0.5019607843137255 )"}
        value={props.search}
        onChangeText={(e) => {
          props.setSearch(e);
        }}
      ></TextInput>
      <Search></Search>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    backgroundColor: "#fffefe",
    borderRadius: 20,
    height: 70,
    alignItems: "center",
    width: "93%",
    position: "absolute",
    bottom: "12%",
  },
  input: {
    width: "75%",
    marginLeft: 40,
  },
});

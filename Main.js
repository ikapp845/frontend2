import { View, StyleSheet, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Second from "./Second";
import AskQuestion from "./Questonnaire/AskQuestion";
import Questonnaire from "./Sections/Questonnaire";

import Contact from "./Group/Contact";

export default function Main() {
  return (
    <View style={styles.main}>
      <Second></Second>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: "100%",
    width: "100%",
  },
});

import { View, StyleSheet, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Second from "./Second";
import AskQuestion from "./Questonnaire/AskQuestion";
import Contact from "./Contacts/Contact";
import Questonnaire from "./Sections/Questonnaire";

export default function Main() {
  return (
    <View style={styles.main}>
      <Questonnaire></Questonnaire>
    </View>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Entry" component={Entry}></Stack.Screen>
    //     <Stack.Screen name="Group" component={Group}></Stack.Screen>
    //     <Stack.Screen name="Question" component={Questionnaire}></Stack.Screen>
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    height: "100%",
    width: "100%",
  },
});

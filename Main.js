import { View, StyleSheet, Text } from "react-native";
import Entry from "./Sections/Entry";
import { NavigationContainer } from "@react-navigation/native";
import Group from "./Sections/Group";
import Questionnaire from "./Sections/Questonnaire";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function Main() {
  return (
    <View style={styles.main}>
      <Questionnaire></Questionnaire>
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

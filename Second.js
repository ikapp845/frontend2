import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Entry from "./Sections/Entry";
import Gender from "./Entry/Gender";
import Group from "./Sections/Group";
import Questonnaire from "./Sections/Questonnaire";
const Stack = createStackNavigator();
export default function Aa() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Entry"
          component={Entry}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Group"
          component={Group}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Question"
          component={Questonnaire}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

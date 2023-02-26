import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Entry from "./Sections/Entry";
import Group from "./Sections/Group";
import Questonnaire from "./Sections/Questonnaire";
import { createContext, useState } from "react";

const Stack = createStackNavigator();
export const EmailContext = createContext();

export default function Aa() {
  const [email, setEmail] = useState();
  return (
    <EmailContext.Provider value={[email, setEmail]}>
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
    </EmailContext.Provider>
  );
}

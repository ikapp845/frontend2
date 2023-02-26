import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Entry from "./Sections/Entry";
import Group from "./Sections/Group";
import Questonnaire from "./Sections/Questonnaire";
import { createContext, useState } from "react";

const Stack = createStackNavigator();
export const EmailContext = createContext();
export const ProfileContext = createContext();

export default function Aa() {
  const [email, setEmail] = useState();
  const [profile, setProfile] = useState();
  return (
    <EmailContext.Provider value={[email, setEmail]}>
      <ProfileContext.Provider value={[profile, setProfile]}>
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
      </ProfileContext.Provider>
    </EmailContext.Provider>
  );
}

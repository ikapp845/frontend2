import { createStackNavigator } from "@react-navigation/stack";
import First from "../Entry/First";
import { NavigationContainer } from "@react-navigation/native";
import Username from "../Entry/Username";
import Gender from "../Entry/Gender";
import Pic from "../Entry/Pic";
import { useState, createContext } from "react";
import Camera1 from "../Entry/Camera";

const Stack = createStackNavigator();
export const UserContext = createContext();
export const GenderContext = createContext();

export default function Entry() {
  const [username, setUsername] = useState("csad");
  const [gender, setGender] = useState("");
  return (
    <UserContext.Provider value={[username, setUsername]}>
      <GenderContext.Provider value={[gender, setGender]}>
        <Stack.Navigator>
          <Stack.Screen
            name="First"
            component={First}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Username"
            component={Username}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Gender"
            component={Gender}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Pic"
            component={Pic}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name="Camera"
            component={Camera1}
            options={{ headerShown: false }}
          ></Stack.Screen>
        </Stack.Navigator>
      </GenderContext.Provider>
    </UserContext.Provider>
  );
}

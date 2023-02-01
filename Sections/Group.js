import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Join from "../Group/Join";
import Create from "../Group/Create";

const Stack = createStackNavigator();

export default function Group() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Join"
          component={Join}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Create"
          component={Create}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

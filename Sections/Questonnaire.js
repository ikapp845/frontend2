import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Main from "../Questonnaire/Main";
import CustomDrawer from "../Components/CustomDrawer";

const Drawer = createDrawerNavigator();

export default function Questonnaire() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name={"Main"}
          component={Main}
          options={{
            drawerItemStyle: {
              height: 0,
            },
            headerShown: false,
          }}
        ></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

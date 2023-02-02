import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Main from "../Questonnaire/Main";
import CustomDrawer from "../Components/CustomDrawer";
import { useEffect, useState } from "react";
import axios from "axios";
import { uri } from "../Link";

const Drawer = createDrawerNavigator();

export default function Questonnaire() {
  const [groups, setGroups] = useState();
  const [total_like, setTotal_like] = useState();
  const [stateful, setStateful] = useState(0);
  const a = { setStateful: setStateful, stateful: stateful };

  useEffect(() => {
    axios
      .get(uri + "group/user_groups/" + "raju")
      .then((result) => {
        setGroups({ result: result.data });
      })
      .catch((err) => {
        alert(
          "Not able to connect to backend server. Please try to check your internet connection"
        );
      });
  }, [stateful]);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => (
          <CustomDrawer {...props} {...groups} {...a} />
        )}
      >
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

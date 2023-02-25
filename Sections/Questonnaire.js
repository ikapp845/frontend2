import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Main from "../Questonnaire/Main";
import CustomDrawer from "../Components/CustomDrawer";
import { useEffect, useState } from "react";
import axios from "axios";
import { uri } from "../Link";

const Drawer = createDrawerNavigator();

export default function Questonnaire() {
  const [selectedgroup, setSelectedgroup] = useState("zsgs");
  const [groups, setGroups] = useState();
  const [stateful, setStateful] = useState(0);
  const a = { setStateful: setStateful, stateful: stateful };
  const b = {
    setSelectedgroup: setSelectedgroup,
    selectedgroup: selectedgroup,
  };
  useEffect(() => {
    axios
      .get(uri + "group/user_groups/" + "raju")
      .then((result) => {
        setGroups({ result: result.data });
        setSelectedgroup(result.data[0].group.id);
      })
      .catch((err) => {
        alert(
          "Not able to connect to backend server. Please try to check your internet connection"
        );
      });
  }, [stateful]);

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawer {...props} {...groups} {...a} {...b} />
      )}
    >
      <Drawer.Screen
        name={"Main"}
        options={{
          drawerItemStyle: {
            height: 0,
          },
          headerShown: false,
        }}
      >
        {(props) => <Main {...props} {...b}></Main>}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
}

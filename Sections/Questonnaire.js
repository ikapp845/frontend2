import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Main from "../Questonnaire/Main";
import CustomDrawer from "../Components/CustomDrawer";
import { useEffect, useState, createContext } from "react";
import axios from "axios";
import { uri } from "../Link";

// import { ProfileContext } from "../Second";

const Drawer = createDrawerNavigator();
export const ProfileContext = createContext();

export default function Questonnaire({ route }) {
  const [selectedgroup, setSelectedgroup] = useState("");
  const [groups, setGroups] = useState();
  const [stateful, setStateful] = useState(0);
  const [profile, setProfile] = useState();
  const { pr } = route.params;

  const a = { setStateful: setStateful, stateful: stateful };
  const b = {
    setSelectedgroup: setSelectedgroup,
    selectedgroup: selectedgroup,
    name: data.name,
    image: data["image_url"],
  };
  useEffect(() => {
    setProfile(pr);
  }, []);

  useEffect(() => {
    axios
      .get(uri + "group/user_groups/" + data.email)
      .then((result) => {
        setGroups({ result: result.data });
        setSelectedgroup(result.data[0].group.id);
      })
      .catch((err) => {
        alert(
          "Not able to connect to backend server to get the Group data. Please try to check your internet connection"
        );
      });
  }, [stateful]);

  return (
    <ProfileContext.Provider value={[profile, setProfile]}>
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
    </ProfileContext.Provider>
  );
}

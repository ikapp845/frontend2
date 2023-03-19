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

export default function Questonnaire() {
  const [selectedgroup, setSelectedgroup] = useState("");
  const [groups, setGroups] = useState();
  const [stateful, setStateful] = useState(0);
  // const [profile] = useContext(ProfileContext);
  const [profile, setProfile] = useState({
    email: "9562267229",
    gender: "Boy",
    id: "e848bd73-7468-451a-818a-5e513191731f",
    image_url: null,
    last_login: "2023-03-16T20:26:29+05:30",
    name: "Delvin Saji",
    otp: "391480",
    paid: "False",
    paid_time: null,
  });
  const a = { setStateful: setStateful, stateful: stateful };
  const b = {
    setSelectedgroup: setSelectedgroup,
    selectedgroup: selectedgroup,
  };
  useEffect(() => {
    axios
      .get(uri + "group/user_groups/" + profile.email)
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
    <ProfileContext.Provider value={[profile, setProfile]}>
      <NavigationContainer>
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
      </NavigationContainer>
    </ProfileContext.Provider>
  );
}

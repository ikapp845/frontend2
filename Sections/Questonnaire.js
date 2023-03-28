import { createDrawerNavigator } from "@react-navigation/drawer";
import Main from "../Questonnaire/Main";
import CustomDrawer from "../Components/CustomDrawer";
import { useEffect, useState, createContext } from "react";
import axios from "axios";
import { uri } from "../Link";
import { BackHandler } from "react-native";

// import { ProfileContext } from "../Second";

const Drawer = createDrawerNavigator();
export const ProfileContext = createContext();

export default function Questonnaire({ route }) {
  const [selectedgroup, setSelectedgroup] = useState("");
  const [groups, setGroups] = useState();
  const [stateful, setStateful] = useState(0);
  const [profile, setProfile] = useState();
  const { pr } = route.params;
  let data;
  if (typeof pr == "string") {
    try {
      data = JSON.parse(pr);
    } catch (error) {
      console.log(error);
    }
  } else {
    data = pr;
  }

  const a = { setStateful: setStateful, stateful: stateful };
  const b = {
    setSelectedgroup: setSelectedgroup,
    selectedgroup: selectedgroup,
    name: data.name,
    image: data["image_url"],
    email: data.email,
  };
  useEffect(() => {
    const backAction = () => {
      // Do something when the back button is pressed
      // For example, show an alert or do nothing
      return true; // Returning true prevents the back button from going back
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  useEffect(() => {
    setProfile(data);
  }, []);
  // console.log(profile);
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

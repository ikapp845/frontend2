import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import BackgroundColour from "../Styles/Background";
import Vertical from "../Icon/Vertical";
import Camera from "../Icon/Camera";
import Like from "../Icon/Like";
import Plus from "../Icon/Plus";
import { useState, useContext } from "react";
import DownPopup from "../Components/DownPopup";
import Popup from "../Components/Popup";

export default function CustomDrawer(props, { navigation }) {
  const [modalvisiblegroup, setModalvisiblegroup] = useState(false);
  const [modalvisiblemain, setModalvisiblemain] = useState(false);
  const [modalvisiblepop, setModalvisiblepop] = useState(false);
  const [head, setHead] = useState("");
  const [head2, setHead2] = useState("");
  const [head3, setHead3] = useState("");
  const [currentgroup, setCurrentgroup] = useState();
  function share() {}

  function leavegroup() {
    setHead("Are you sure you want to leave the group?");
    setHead2("You'll be removed from the group without notifying other user's");
    setHead3("leave");
    setModalvisiblepop(true);
  }

  function instagram() {}

  function help() {}

  function deleteaccount() {
    setHead("Are you sure you want to delete your account?");
    setHead2("You won't be able to recover your likes");
    setHead3("Delete");
    setModalvisiblepop(true);
  }
  return (
    <View style={[BackgroundColour.back]}>
      <DownPopup
        data={[
          { name: "Follow us on Instagram", function: instagram },
          { name: "I want help", function: help },
          { name: "Delete my account", function: deleteaccount },
        ]}
        modalvisible={modalvisiblemain}
        setModalvisible={setModalvisiblemain}
      ></DownPopup>
      <DownPopup
        data={[
          {
            name: "Share Invite Link" + (currentgroup ? currentgroup : ""),
            function: share,
          },
          { name: "Leave from group", function: leavegroup },
        ]}
        modalvisible={modalvisiblegroup}
        setModalvisible={setModalvisiblegroup}
      ></DownPopup>
      <Popup
        modalvisible={modalvisiblepop}
        setModalvisible={setModalvisiblepop}
        head={head}
        head2={head2}
        head3={head3}
        currentgroup={currentgroup}
        stateful={props.stateful}
        setStateful={props.setStateful}
        email={props.email}
      ></Popup>
      <View style={styles.top}>
        <View style={styles.profilepic}>
          <Image
            source={{ uri: props.image }}
            style={{ width: "100%", height: "100%", borderRadius: 50 }}
          />
          <View style={styles.camera}>
            <Camera></Camera>
          </View>
        </View>
        <View style={styles.nameview}>
          <Text style={styles.name}>{props.name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Like></Like>
            <Text style={{ color: "white", fontSize: 16 }}> 123</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            setModalvisiblemain(true);
          }}
          style={{ padding: 20 }}
        >
          <Vertical></Vertical>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.create}
        onPress={() => {
          navigation.navigate("Group");
        }}
      >
        <Plus style={{ marginLeft: 10 }}></Plus>
        <Text style={styles.createtext}> Create a group</Text>
        <Vertical></Vertical>
      </TouchableOpacity>
      {props.result
        ? props.result.map((obj) => (
            <View key={obj.group.id} style={styles.create}>
              <TouchableOpacity
                style={{ width: "80%" }}
                onPress={() => {
                  props.setSelectedgroup(obj.group.id);
                  props.navigation.closeDrawer();
                }}
              >
                <Text style={[styles.createtext, { marginLeft: 25 }]}>
                  {obj.group.name}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setModalvisiblegroup(true);
                  setCurrentgroup(obj.group.id);
                }}
                style={{ padding: 20 }}
              >
                <Vertical></Vertical>
              </TouchableOpacity>
            </View>
          ))
        : ""}

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  profilepic: {
    height: 70,
    width: 70,
    borderRadius: 100,
    position: "relative",
    marginLeft: 16,
  },
  camera: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 100,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
    right: 0,
  },
  nameview: {
    marginLeft: 16,
    marginRight: 30,
    width: "35%",
  },
  name: {
    fontSize: 18,
    color: "white",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderColor: "white",
  },
  createtext: {
    color: "white",
    fontSize: 16,
    width: "80%",
  },
  create: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 25,
    width: "86%",
    marginLeft: "7%",
    height: 60,
    marginTop: 16,
  },
});

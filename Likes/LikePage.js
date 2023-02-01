import { View, Modal, StyleSheet, Text, TouchableOpacity } from "react-native";
import Down from "../Icon/Down";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Friends from "./Friends";
import Likes from "./Likes";
import LikeOpen from "./LikeOpen";
import { useState } from "react";
import Reveal from "../Supermode/Reveal";

const Tab = createMaterialTopTabNavigator();

export default function LikePage(props) {
  const [modalvisible, setModalvisible] = useState(false);
  const [activated, setActivated] = useState(true);
  return (
    <Modal
      transparent={true}
      onRequestClose={() => {
        props.setModalvisible(false);
      }}
      visible={props.modalvisible}
      animationType="slide"
    >
      <Reveal modalvisible={activated} setModalvisible={setActivated}></Reveal>
      <LikeOpen
        modalvisible={modalvisible}
        setModalvisible={setModalvisible}
      ></LikeOpen>

      <View style={styles.like}>
        <View style={styles.likeinside}>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <TouchableOpacity
              style={{ marginLeft: "2%" }}
              onPress={() => {
                props.setModalvisible(false);
              }}
            >
              <Down></Down>
            </TouchableOpacity>
            <Text style={{ fontSize: 18, textAlign: "center", width: "88%" }}>
              Likes
            </Text>
          </View>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: { fontSize: 16 },
              tabBarActiveTintColor: "#a17cce",
              tabBarInactiveTintColor: "#b1b1b1",
              tabBarIndicatorStyle: {
                backgroundColor: "#a17cce",
              },
            }}
          >
            <Tab.Screen name="Me">
              {(props) => (
                <Likes {...props} setModalvisible={setModalvisible} />
              )}
            </Tab.Screen>
            <Tab.Screen name="Friends" component={Friends}></Tab.Screen>
          </Tab.Navigator>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  like: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  likeinside: {
    bottom: 0,
    position: "absolute",
    height: "95%",
    width: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});

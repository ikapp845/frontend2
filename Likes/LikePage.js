import { View, Modal, StyleSheet, Text, TouchableOpacity } from "react-native";
import Down from "../Icon/Down";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Friends from "./Friends";
import Likes from "./Likes";
import LikeOpen from "./LikeOpen";
import { useState } from "react";
import Reveal from "../Supermode/Reveal";
import GroupMembersIcon from "../Components/GroupMembersIcon";
const Tab = createMaterialTopTabNavigator();

export default function LikePage(props) {
  const [modalvisible, setModalvisible] = useState(false);
  const [activated, setActivated] = useState(true);
  const [question, setQuestion] = useState("");
  const [user, setUser] = useState();
  const a = {
    question: question,
    setQuestion: setQuestion,
    user: user,
    setUser: setUser,
    email: props.email,
  };

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
        question={question}
        name={props.name}
        image={props.image}
        user={user ? user : { total_question_like: 0, question_likes: 0 }}
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
            <Text style={{ fontSize: 18, textAlign: "center", width: "80%" }}>
              Likes
            </Text>
            <GroupMembersIcon
              group_members={props.group_members}
            ></GroupMembersIcon>
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
                <Likes {...props} {...a} setModalvisible={setModalvisible} />
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

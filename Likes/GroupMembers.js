import { View, Modal, StyleSheet, Text, ScrollView } from "react-native";
import BackBlack from "../Components/BackBlack";
import Members from "./Members";

export default function GroupMembers(props) {
  return (
    <Modal
      transparent={true}
      onRequestClose={() => {
        props.setModalvisible(false);
      }}
      visible={props.modalvisible}
      animationType="slide"
    >
      <View style={styles.like}>
        <View style={styles.likeinside}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <BackBlack></BackBlack>
            <Text style={{ fontSize: 16, marginTop: 18 }}>Group Members</Text>
          </View>
          <ScrollView>
            {props.group_members
              ? props.group_members.map((obj) => (
                  <Members
                    key={obj.user.id}
                    likes={obj.total_likes}
                    name={obj.user.name}
                    image={obj.user.image_url}
                  ></Members>
                ))
              : ""}
          </ScrollView>
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

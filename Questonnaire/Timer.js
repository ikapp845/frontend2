import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Timer() {
  return (
    <View style={styles.main}>
      <View style={styles.timer}>
        <View style={styles.tim}>
          <View style={styles.box}>
            <Text style={{ fontSize: 16 }}>0</Text>
          </View>
          <Text style={styles.colon}>:</Text>
          <View style={styles.box}>
            <Text>44</Text>
          </View>
        </View>
        <Text style={styles.desc}>
          New polls will be unlocked after an hour
        </Text>
      </View>
      <Text
        style={{
          fontSize: 16,
          color: "white",
          marginTop: 30,
          marginBottom: 15,
        }}
      >
        ---- OR ----
      </Text>
      <Text style={{ fontSize: 16, color: "white", marginBottom: 15 }}>
        Skip the weight by{" "}
      </Text>
      <TouchableOpacity style={styles.invite}>
        <Text style={styles.invitetext}>Invite friends</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    width: "100%",
  },
  timer: {
    backgroundColor: "white",
    width: "75%",
    borderRadius: 20,
    alignItems: "center",
    marginTop: 30,
  },
  box: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  tim: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  colon: {
    marginRight: 10,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  desc: {
    textAlign: "center",
    width: "70%",
    fontSize: 16,
    marginBottom: 70,
  },
  invite: {
    backgroundColor: "white",
    width: "75%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  invitetext: { fontSize: 16 },
});

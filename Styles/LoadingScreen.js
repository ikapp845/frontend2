import { View, ActivityIndicator } from "react-native";

export default function LoadingScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "grey",
        opacity: 0.5,
      }}
    >
      <ActivityIndicator size={"large"} color="#b793d6"></ActivityIndicator>
    </View>
  );
}

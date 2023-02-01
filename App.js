import React from "react";
import { View } from "react-native";
import Main from "./Main";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <View>
      <StatusBar backgroundColor={"#b793d6"} />
      <Main></Main>
    </View>
  );
}

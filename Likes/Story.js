import ViewShot from "react-native-view-shot";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useRef, useEffect, useState } from "react";
import LabelAnswered from "../Components/LabelAnswered";

export default function Story(props) {
  const ref = useRef();
  const [urii, setUrii] = useState();
  useEffect(() => {
    // on mount
    ref.current.capture().then((uri) => {
      console.log("do something with ", uri);
      setUrii(uri);
    });
  }, []);
  const sharePhoto = (uri) => {
    const encodedURL = encodeURIComponent(urii);
    const instagramURL = `https://instagram.com://library?AssetPath=${encodedURL}`;
    // Linking.openURL(instagramURL)

    // Linking.canOpenURL(instagramURL).then(supported => {
    // if (!supported) {
    //   console.log('Can\'t handle url: ' + instagramURL);
    // } else {
    return Linking.openURL(instagramURL);

    // }
    // }).catch(err => console.error('An error occurred', err));
  };

  return (
    <View>
      <ViewShot
        ref={ref}
        options={{ fileName: "Your-File-Name", format: "jpg", quality: 0.9 }}
        style={{ alignItems: "center" }}
      >
        <View style={styles.box}>
          {/* <Text style={styles.question}>{props.question}</Text> */}
          <Text style={styles.question}>Who is the cutest is the group?</Text>
          {/* <LabelAnswered
            name={"raju"}
            total_likes={
              props.user.total_question_like
                ? props.user.total_question_like
                : 0
            }
            likes={props.user.question_likes ? props.user.question_likes : 0}
          ></LabelAnswered> */}
          <LabelAnswered
            name={"raju"}
            total_likes={10}
            likes={5}
          ></LabelAnswered>
        </View>
      </ViewShot>
      <Image source={{ uri: urii }} style={{ height: 200, width: 300 }}></Image>
      <TouchableOpacity onPress={sharePhoto}>
        <Text>aaa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#b793d6",
    height: 200,
    width: "80%",
    borderRadius: 25,
    alignItems: "center",
    margin: 10,
  },
  question: {
    color: "white",
    fontSize: 20,
    width: "70%",
    textAlign: "center",

    marginTop: 15,
  },
});

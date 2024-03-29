import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import BackgroundColour from "../Styles/Background";
import { useState } from "react";
import DownPopup from "../Components/DownPopup";
import { useContext } from "react";
import { GenderContext } from "../Sections/Entry";
import { UserContext } from "../Sections/Entry";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { uri } from "../Link";
// import { ProfileContext, EmailContext } from "../Second";
import { EmailContext } from "../Second";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Pic({ navigation }) {
  const [state, setState] = useState(false);
  const [modalvisible, setModalvisible] = useState(false);
  const [username, setUsername] = useContext(UserContext);
  const [email, setEmail] = useContext(EmailContext);
  const [gender, setGender] = useContext(GenderContext);
  const [image, setImage] = useState();
  // const [profile, setProfile] = useContext(ProfileContext);
  const storedata = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("profile", jsonValue);
    } catch (e) {
      console.log(e);
    }
  };
  const choosefromgallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.uri) {
      setImage(result.uri);
      setState(true);
    }
  };

  function takephoto() {
    navigation.navigate("Camera", {
      image,
      setImage,
      setState,
      setModalvisible,
    });
  }
  return (
    <View style={BackgroundColour.back}>
      <DownPopup
        data={[
          { name: "Take a photo", function: takephoto },
          { name: "Choose from Gallery", function: choosefromgallery },
        ]}
        modalvisible={modalvisible}
        setModalvisible={setModalvisible}
      ></DownPopup>
      <View style={styles.head}>
        <Text style={styles.headtext}>
          Upload a picture to help others identify you
        </Text>
      </View>
      <View style={styles.pic}>
        <TouchableOpacity
          style={[styles.save]}
          onPress={() => {
            setImage(false);
            setModalvisible(true);
          }}
        >
          {image !== null ? (
            <Image
              style={styles.picture}
              source={{
                uri: image,
              }}
            />
          ) : (
            <View
              style={[styles.picture, { backgroundColor: "#F3DBFA" }]}
            ></View>
          )}
          <Text>Upload a profile picture</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.save, state ? { opacity: 1 } : { opacity: 0.5 }]}
        onPress={() => {
          const formData = new FormData();
          var photo = {
            uri: image,
            type: "image/jpeg",
            name: `${email}.jpg`,
          };
          formData.append("image", photo);
          formData.append("username", username);
          formData.append("gender", gender);
          formData.append("email", email);
          (async () => {
            try {
              const response = await axios.post(uri + "user/post/", formData);
              storedata(response.data);
              navigation.navigate("Group");
            } catch (error) {
              console.error(error);
            }
          })();
        }}
      >
        <Text>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    width: "89%",
    marginLeft: "5.5%",
    marginTop: 50,
  },
  headtext: {
    fontSize: 22,
    textAlign: "center",
    color: "white",
  },
  save: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    width: "83%",
    borderRadius: 30,
    height: 80,
    marginLeft: "8.5%",
    marginTop: 30,
  },
  picture: {
    position: "absolute",
    height: 100,
    width: 100,
    borderWidth: 6,
    borderRadius: 100,

    borderColor: "white",
    top: -75,
    alignItems: "center",
  },
  pic: {
    marginTop: 80,
  },
});

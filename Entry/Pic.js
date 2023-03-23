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

export default function Pic({ navigation }) {
  const [state, setState] = useState(false);
  const [modalvisible, setModalvisible] = useState(false);
  const [username, setUsername] = useContext(UserContext);
  const [email, setEmail] = useContext(EmailContext);
  const [gender, setGender] = useContext(GenderContext);
  const [image, setImage] = useState(null);
  // const [profile, setProfile] = useContext(ProfileContext);

  const choosefromgallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);
    if (!result.cancelled) {
      setImage(result.uri);
      setState(true);
    }
  };

  function takephoto() {
    navigation.navigate("Camera", {
      image: image,
      setImage: setImage,
      setState: setState,
      modal: setModalvisible,
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
            name: `${username}.jpg`,
          };
          formData.append("image", photo);
          formData.append("username", username);
          formData.append("gender", gender);
          formData.append("email", email);
          axios.post(uri + "user/post/", formData).then((result) => {
            navigation.navigate("Group");
          });
        }}
        // const formData = new FormData();
        // formData.append("image", {
        //   uri: uri,
        //   name: "image.jpg",
        //   type: "image/jpg",
        // });
        // formData.append("username", username);
        // formData.append("email", email);
        // formData.append("gender", gender);

        // const response = await fetch(uri + "user/post/", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        //   body: formData,
        // });
        // console.log(response);
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

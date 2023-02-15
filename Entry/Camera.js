import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

export default function Camera1({ route, navigation }) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null);

  const { image, setImage, setState } = route.params;
  const takePicture = async () => {
    const data = await camera.takePictureAsync(null);
    setState(true);
    setImage(data.uri);
    navigation.navigate("Pic");
  };

  const retakepicture = async () => {
    setImage(null);
    setState(false);
  };

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={(ref) => setCamera(ref)}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>Take picture</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      {image && (
        <Image source={{ uri: image }} style={{ flex: 1 }}>
          <TouchableOpacity style={styles.button} onPress={retakepicture}>
            <Text style={styles.text}>Retake Picture</Text>
          </TouchableOpacity>
        </Image>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 20,
    marginBottom: 60,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: "#b793d6",
    borderRadius: 20,
    padding: 5,
    margin: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

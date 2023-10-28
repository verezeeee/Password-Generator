import {
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Pressable,
  Modal,
} from "react-native";
import Slider from "@react-native-community/slider";
import React from "react";
import { ModalView } from "../../components/Modal";

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export function Home() {
  const [buttonPressed, setButtonPressed] = React.useState(false);
  const [value, setValue] = React.useState(8);
  const [password, setPassword] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);

  function generatePassword(length) {
    let password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(password);
    setIsOpen(true);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/lock-removebg-preview.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>{value} Caracteres</Text>
      <Slider
        style={{ width: 200, height: 40, marginBottom: 20 }}
        minimumValue={8}
        maximumValue={20}
        minimumTrackTintColor="#000"
        maximumTrackTintColor="#000"
        thumbTintColor="#000"
        step={1}
        onValueChange={(value) => {
          setValue(value);
        }}
      />
      <Pressable
        style={[
          styles.button,
          {
            opacity: buttonPressed ? 0.8 : 1,
          },
        ]}
        onPressIn={() => setButtonPressed(true)}
        onPressOut={() => setButtonPressed(false)}
        onPress={() => {
          generatePassword(value);
        }}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>Gerar Senha</Text>
      </Pressable>
      <Modal visible={isOpen} animationType="fade" transparent={true}>
        <ModalView
          senha={password}
          handleClose={() => {
            setIsOpen(false);
          }}
        />
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "30%",
    height: "30%",
    resizeMode: "contain",
    marginBottom: 20,
  },
  text: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#000",
    width: "50%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
});

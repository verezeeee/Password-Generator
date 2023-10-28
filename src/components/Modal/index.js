import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import useStorage from "../../hooks/useStorage";

export function ModalView({ senha, handleClose }) {
    const {setItem, getItem} = useStorage();
  async function handleCopy() {
    await Clipboard.setStringAsync(senha);
    alert("Senha copiada com sucesso!");
  }
  async function handleSave() {
    await setItem('passwords', senha);
    alert("Senha salva com sucesso!");
    handleClose();
  }
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.modal}>
        <Text style={styles.texto}>Senha gerada com sucesso!</Text>
        <Pressable style={styles.touch} onLongPress={handleCopy}>
          <Text style={{ color: "#fff", fontSize: 20 }}>{senha}</Text>
        </Pressable>
        <SafeAreaView style={styles.buttonView}>
          <TouchableOpacity
            onPress={handleClose}
            style={[styles.button, { backgroundColor: "#ccc" }]}
          >
            <Text style={{ color: "#000", fontSize: 20 }}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSave} style={[styles.button, styles.buttonSave]}>
            <Text style={{ color: "#000", fontSize: 20 }}>Salvar</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    width: "80%",
    height: "25%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  touch: {
    width: "80%",
    height: 50,
    backgroundColor: "rgba(0,0,0,0.8)",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonView: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    marginTop: 8,
    gap: 16,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
    height: 40,
    borderRadius: 12,
  },
  buttonSave: {
    backgroundColor: "#a9ba9d",
  },
});

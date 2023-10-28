import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "../../hooks/useStorage";
import { Ionicons } from "@expo/vector-icons";

export function Passwords() {
  const [list, setList] = useState([]);
  const { getItem, removeItem } = useStorage();
  const isFocused = useIsFocused();

  async function handleDelete(item) {
    const data = await removeItem("passwords", item);
    setList(data);
  }

  useEffect(() => {
    async function loadPasswords() {
      const data = await getItem("passwords");
      setList(data);
    }
    loadPasswords();
  }, [isFocused]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Minhas Senhas</Text>
      </View>
      <ScrollView>
        <View style={styles.body}>
          {list.map((item) => (
            <Pressable key={item} style={styles.button}>
              <Text style={{ color: "#fff", fontSize: 20 }}>{item}</Text>
              <TouchableOpacity onPress={() => handleDelete(item)}>
                <Ionicons name="trash-outline" size={30} color="#fff" />
              </TouchableOpacity>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccc",
    flex: 1,
  },
  header: {
    backgroundColor: "#ccc",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#313236",
    width: "90%",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 12,
    marginVertical: 10,
  },
});

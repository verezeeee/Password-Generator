import AsyncStorage from "@react-native-async-storage/async-storage";


const useStorage = () => {
    //Buscar itens
    const getItem = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
        } catch (error) {
            console.log(error)
            return [];
        }
    }

    //Salvar itens
    const setItem = async (key, value) => {
        try {
            let passwords = await getItem(key);

            passwords.push(value);

            await AsyncStorage.setItem(key, JSON.stringify(passwords));

        } catch (error) {
            console.log(error)
        }
    }
    //Deletar itens
    const removeItem = async (key, item) => {
        try {
            let passwords = await getItem(key);

            let myPasswords = passwords.filter((password) => password !== item);

            await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
            return myPasswords;
        } catch (error) {
            console.log(error)
        }
    }

    const clearStorage = async () => {
        try {
            await AsyncStorage.clear();
        } catch (error) {
            console.log(error)
        }
    }

    return { getItem, setItem, removeItem, clearStorage }
}

export default useStorage;
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Utils = {

    async storeData(key, value) {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue)
        } catch (e) {
            // saving error
            console.log('error', e);
        }
    },

    async getData(key) {
        try {
            const jsonValue = await AsyncStorage.getItem(key);
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
    },

    async storeStringData(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (e) {
            // saving error
        }
    },

    async getStringData(key) {
        try {
            const jsonValue = await AsyncStorage.getItem(key);
            return jsonValue;
        } catch (e) {
            // error reading value
        }
    },


    async clearAllData() {
        try {
            await AsyncStorage.clear();
            return true;
        } catch (e) {
            console.log(e);
            // error reading value
        }
    }
}
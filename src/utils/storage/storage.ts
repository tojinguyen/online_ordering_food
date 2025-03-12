import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeToken = async (token: string) => {
    await AsyncStorage.setItem('auth_token', token);
};

export const getToken = async (): Promise<string | null> => {
    return await AsyncStorage.getItem('auth_token');
};

export const removeToken = async () => {
    await AsyncStorage.removeItem('auth_token');
};

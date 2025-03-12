import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Định nghĩa các màn hình và tham số của chúng
export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
};

// Định nghĩa kiểu cho props của LoginScreen
export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Định nghĩa các màn hình và tham số của chúng
export type RootStackParamList = {
    Login: undefined;
    Register: undefined;
    Home: undefined;
};

// Định nghĩa kiểu cho props của LoginScreen
export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

// Định nghĩa kiểu cho props của RegisterScreen
export type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, 'Register'>;

// Định nghĩa kiểu cho props của HomeScreen
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

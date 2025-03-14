import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Định nghĩa các màn hình và tham số của chúng
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Splash: undefined;
  Register: undefined;
  VerifyRegisterCode: undefined;
};

// Định nghĩa kiểu cho props của SplashScreen
export type SplashScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Splash"
>;

// Định nghĩa kiểu cho props của LoginScreen
export type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Login"
>;

// Định nghĩa kiểu cho props của RegisterScreen
export type RegisterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Register"
>;

export type VerifyRegisterCodeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "VerifyRegisterCode"
>;

// Định nghĩa kiểu cho props của HomeScreen
export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

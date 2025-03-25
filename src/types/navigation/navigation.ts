import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Định nghĩa các màn hình và tham số của chúng
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Splash: undefined;
  Register: undefined;
  VerifyRegisterCode: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
  VerifyResetPasswordCode: undefined;
  ProfileCreation: undefined;
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

export type ForgotPasswordScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ForgotPassword"
>;

export type ResetPasswordScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ResetPassword"
>;

export type VerifyResetPasswordCodeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "VerifyResetPasswordCode"
>;

// Định nghĩa kiểu cho props của HomeScreen
export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

// Định nghĩa kiểu cho props của ProfileCreationScreen
export type ProfileCreationScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ProfileCreation"
>;

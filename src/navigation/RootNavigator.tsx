import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import VerifyRegisterCodeScreen from "../screens/auth/VerifyRegisterCodeScreen";
import HomeScreen from "../screens/home/HomeScreen";
import ProfileCreationScreen from "../screens/profile/ProfileCreationScreen";
import SplashScreen from "../screens/splash/SplashScreen";
import { RootStackParamList } from "../types/navigation/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VerifyRegisterCode"
        component={VerifyRegisterCodeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ProfileCreation"
        component={ProfileCreationScreen}
        options={{ title: "Create Profile" }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;

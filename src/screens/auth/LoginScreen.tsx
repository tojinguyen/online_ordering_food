import React, { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { LoginRequestDto } from "../../dtos/auth/LoginDto";
import { useAuth } from "../../hooks/auth/useAuth";
import { LoginScreenProps } from "../../types/navigation";

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      console.log("Login successful");
      navigation.navigate("Home");
    }
  }, [isAuthenticated, navigation]);

  const handleLogin = async () => {
    const credentials: LoginRequestDto = {
      email,
      password,
    };

    try {
      await login(credentials);

      if (isAuthenticated) {
        console.log("Login successful");
      } else {
        Alert.alert("Login Failed");
      }
    } catch (error) {
      Alert.alert("Login Error");
    }
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Forget Password")}>
        <Text style={styles.link}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.googleButton]}
        onPress={() => console.log("Login with Google")}
      >
        <Text style={styles.buttonText}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 32,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#007bff",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  link: {
    color: "#007bff",
    marginVertical: 8,
  },
  googleButton: {
    backgroundColor: "#db4437",
  },
});

export default LoginScreen;

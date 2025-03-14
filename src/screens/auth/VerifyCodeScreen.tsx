import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { VerifyRegisterCodeRequestDto } from "../../dtos/auth/RegisterDto";
import { AuthService } from "../../services/AuthService"; // Assume this handles API calls

const VerifyRegisterCodeScreen = ({ route, navigation }: any) => {
  const { email } = route.params;
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerifyCode = async () => {
    if (!code) {
      Alert.alert("Error", "Please enter the verification code.");
      return;
    }

    setLoading(true);
    try {
      const sendRegisterCodeRequest: VerifyRegisterCodeRequestDto = {
        email,
        code,
      };
      const response = await AuthService.verifyCode(sendRegisterCodeRequest);
      if (response.success) {
        Alert.alert("Success", "Account verified! You can now log in.");
        navigation.replace("Login");
      } else {
        Alert.alert("Error", response.message);
      }
    } catch (error) {
      Alert.alert("Error", "Verification failed. Try again.");
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Verification Code"
        keyboardType="numeric"
        value={code}
        onChangeText={setCode}
      />
      <Button
        title={loading ? "Verifying..." : "Verify"}
        onPress={handleVerifyCode}
        disabled={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default VerifyRegisterCodeScreen;

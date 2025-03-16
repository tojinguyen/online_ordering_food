import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  FlexAlignType,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { RefreshAccessTokenRequestDto } from "../../dtos/auth/LoginDto";
import { useAuth } from "../../hooks/auth/useAuth";
import { AuthService } from "../../services/AuthService";
import { SplashScreenProps } from "../../types/navigation";
import { getRefreshToken } from "../../utils/storage/storageAuth";

const SplashScreen = ({ navigation }: SplashScreenProps) => {
  const { setIsAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState(true); // To control the delay

  // Animated logo scale
  const scaleValue = new Animated.Value(0);

  useEffect(() => {
    // Function to check the authentication status
    const checkAuthStatus = async () => {
      try {
        const refreshToken = await getRefreshToken();
        console.log("Retrieved refresh token:", refreshToken);

        if (!refreshToken) {
          console.log("No refresh token found, redirecting to login...");
          setTimeout(() => {
            navigation.replace("Login");
          }, 1500); // Delay the navigation for 1.5 seconds
          return;
        }

        const refreshAccessTokenRequest: RefreshAccessTokenRequestDto = {
          refreshToken,
        };

        const response = await AuthService.refreshAccessToken(
          refreshAccessTokenRequest
        );
        console.log("Token refresh response:", response);

        if (response.success) {
          console.log("Token refreshed successfully, setting authenticated...");
          setIsAuthenticated(true);
          setTimeout(() => {
            navigation.replace("Home");
          }, 2500); // Delay the navigation for 1.5 seconds
        } else {
          console.log("Token refresh failed.");
          throw new Error("Token refresh failed");
        }
      } catch (error) {
        console.error("Error during authentication:", error);
        await AuthService.logout();
        setIsAuthenticated(false);
        setTimeout(() => {
          navigation.replace("Login");
        }, 2500); // Delay the navigation for 1.5 seconds
      }
    };

    // Start the animated scale for the logo
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 1500, // Duration for the logo animation
      useNativeDriver: true,
    }).start();

    // Immediately check the authentication status
    checkAuthStatus();
  }, []); // Empty dependency array to run this once when the component mounts

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.logoContainer, { transform: [{ scale: scaleValue }] }]}
      >
        <Image
          source={require("../../../assets/splash_icon.png")}
          style={styles.logo}
        />
      </Animated.View>
      <ActivityIndicator size="large" color="#FF6347" style={styles.spinner} />
      <Text style={styles.loadingText}>Preparing your experience...</Text>
    </View>
  );
};

// Use StyleSheet.create for the styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center" as FlexAlignType,
    backgroundColor: "#fff", // Or your branding color
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  spinner: {
    marginTop: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
});

export default SplashScreen;

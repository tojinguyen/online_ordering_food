import { useState, useCallback } from "react";
import { LoginRequestDto } from "../../dtos/auth/LoginDto";
import { AuthService } from "../../services/AuthService";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = useCallback(async (credentials: LoginRequestDto) => {
    try {
      const response = await AuthService.login(credentials);
      if (response.success) {
        setIsAuthenticated(true);
      }
      return response.data;
    } catch (err: any) {
      throw new Error(err.message || "System Error");
    }
  }, []);

  const logout = async () => {
    await AuthService.logout();
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    setIsAuthenticated,
    login,
    logout,
  };
};

import { useCallback, useState } from "react";
import { LoginRequestDto } from "../../dtos/auth/LoginDto";
import { AuthService } from "../../services/user-service/AuthService";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = useCallback(async (credentials: LoginRequestDto) => {
    try {
      const response = await AuthService.login(credentials);
      if (response.success) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
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

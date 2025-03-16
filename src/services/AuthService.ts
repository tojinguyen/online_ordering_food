import {
  LoginRequestDto,
  LoginResponseDto,
  RefreshAccessTokenRequestDto,
} from "../dtos/auth/LoginDto";
import {
  RegisterRequestDto,
  RegisterResponseDto,
  VerifyRegisterCodeRequestDto,
  VerifyRegisterCodeResponseDto,
} from "../dtos/auth/RegisterDto";
import { ApiClient } from "../utils/api/ApiClient";
import { ApiResponse } from "../utils/api/ApiTypes";
import {
  storeAccessToken,
  storeRefreshToken,
} from "../utils/storage/storageAuth";

export const AuthService = {
  login: async (
    credentials: LoginRequestDto
  ): Promise<ApiResponse<LoginResponseDto>> => {
    try {
      const response = await ApiClient.post<ApiResponse<LoginResponseDto>>(
        "/auth/login",
        credentials
      );

      if (response.data.success && response.data.data?.accessToken) {
        if (response.data.data.accessToken) {
          await storeAccessToken(response.data.data.accessToken);
        }

        if (response.data.data.refreshToken) {
          await storeRefreshToken(response.data.data.refreshToken);
        }
      }

      return response.data;
    } catch (error: any) {
      throw new Error(error.message || "System Error");
    }
  },

  logout: async () => {
    await storeAccessToken("");
    await storeRefreshToken("");
  },

  refreshAccessToken: async (
    credentials: RefreshAccessTokenRequestDto
  ): Promise<ApiResponse<LoginResponseDto>> => {
    try {
      const response = await ApiClient.post<ApiResponse<LoginResponseDto>>(
        "/auth/refresh-token",
        { credentials }
      );

      if (response.data.success && response.data.data) {
        await storeAccessToken(response.data.data.accessToken);
        await storeRefreshToken(response.data.data.refreshToken);
      }

      return response.data;
    } catch (error: any) {
      throw new Error(error.message || "Failed to refresh token");
    }
  },

  register: async (
    credentials: RegisterRequestDto
  ): Promise<ApiResponse<RegisterResponseDto>> => {
    try {
      const response = await ApiClient.post<ApiResponse<RegisterResponseDto>>(
        "/auth/send-register-code",
        credentials
      );
      return response.data;
    } catch (error: any) {
      throw new Error(error.message || "System Error");
    }
  },

  verifyRegisterCode: async (
    verifyRequest: VerifyRegisterCodeRequestDto
  ): Promise<ApiResponse<VerifyRegisterCodeResponseDto>> => {
    try {
      const response = await ApiClient.post<
        ApiResponse<VerifyRegisterCodeResponseDto>
      >("/auth/verify-register-code", verifyRequest);

      if (response.data.success && response.data.data?.accessToken) {
        if (response.data.data.accessToken) {
          await storeAccessToken(response.data.data.accessToken);
        }

        if (response.data.data.refreshToken) {
          await storeRefreshToken(response.data.data.refreshToken);
        }
      }

      return response.data;
    } catch (error: any) {
      throw new Error(error.message || "System Error");
    }
  },
};

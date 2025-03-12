import {ApiClient} from "../utils/api/ApiClient";
import {ApiResponse} from "../utils/api/ApiTypes";
import {LoginRequestDto, LoginResponseDto} from "../dtos/auth/LoginDto";
import {storeAccessToken, storeRefreshToken} from "../utils/storage/storageAuth";

export const AuthService = {
    login: async (credentials: LoginRequestDto): Promise<ApiResponse<LoginResponseDto>> => {
        try {
            const response = await ApiClient.post<ApiResponse<LoginResponseDto>>('/auth/login', credentials);

            if (response.data.success && response.data.data?.accessToken) {
                if (response.data.data.accessToken) {
                    await storeAccessToken(response.data.data.accessToken);
                }

                if (response.data.data.refreshToken){
                    await storeRefreshToken(response.data.data.refreshToken);
                }
            }

            return response.data;
        } catch (error : any) {
            throw new Error(error.message || 'System Error');
        }
    },

    logout: async () => {
        await storeAccessToken('');
        await storeRefreshToken('')
    }
};

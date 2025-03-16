export interface LoginRequestDto {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  accessToken: string;
  refreshToken: string;
}

export interface RefreshAccessTokenRequestDto {
  refreshToken: string;
}

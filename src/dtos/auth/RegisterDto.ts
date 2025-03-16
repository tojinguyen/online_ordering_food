export interface RegisterRequestDto {
  email: string;
  password: string;
}

export interface RegisterResponseDto {
  data: string;
}

export interface VerifyRegisterCodeRequestDto {
  email: string;
  password: string;
  code: string;
}

export interface VerifyRegisterCodeResponseDto {
  accessToken: string;
  refreshToken: string;
}

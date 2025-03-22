export interface SendCodeResetPasswordRequestDto {
  email: string;
}

export interface SendCodeResetPasswordResponseDto {
  message: string;
}

export interface VerifyResetPasswordCodeRequestDto {
  email: string;
  password: string;
  code: string;
}

export interface VerifyResetPasswordCodeResponseDto {
  resetSuccess: boolean;
}

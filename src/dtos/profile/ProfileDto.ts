import { Address } from "../../types/profile/profile";

// Request DTOs
export interface CreateProfileRequest {
  userId: string;
  name: string;
  phoneNumber: string;
  gender: string;
  dateOfBirth: string;
  avatar?: any; // For FormData file upload
  addresses: Address[];
}

export interface UpdateProfileRequest {
  name?: string;
  phoneNumber?: string;
  gender?: string;
  dateOfBirth?: string;
  avatar?: any; // For FormData file upload
}

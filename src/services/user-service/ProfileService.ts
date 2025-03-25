import { ApiResponse } from "../../dtos/common/ApiTypes";
import {
  CreateProfileRequest,
  UpdateProfileRequest,
} from "../../dtos/profile/ProfileDto";
import { Address, ProfileData } from "../../types/profile/profile";
import { ApiClient } from "../../utils/api/ApiClient";
import { getAccessToken } from "../../utils/storage/storageAuth";

export const ProfileService = {
  createProfile: async (
    profileData: CreateProfileRequest
  ): Promise<ApiResponse<ProfileData>> => {
    try {
      const token = await getAccessToken();
      const formData = new FormData();

      // Append basic profile data
      formData.append("userId", profileData.userId);
      formData.append("name", profileData.name);
      formData.append("phoneNumber", profileData.phoneNumber);
      formData.append("gender", profileData.gender);
      formData.append("dateOfBirth", profileData.dateOfBirth);

      // Append avatar for React Native environment
      if (profileData.avatar) {
        const uriParts = profileData.avatar.uri.split(".");
        const fileType = uriParts[uriParts.length - 1];

        // @ts-ignore - React Native's FormData implementation accepts this format
        formData.append("avatar", {
          uri: profileData.avatar.uri,
          name: `profile-${profileData.userId}.${fileType}`,
          type: `image/${fileType}`,
        });
      }

      // Append addresses
      profileData.addresses.forEach((address, index) => {
        // Use type assertion to tell TypeScript that key is a valid property name
        Object.keys(address).forEach((key) => {
          const value = address[key as keyof Address];
          // Only append if the value is defined and is a string
          if (value !== undefined && typeof value === "string") {
            formData.append(`addresses[${index}].${key}`, value);
          }
        });
      });

      const response = await ApiClient.post<ApiResponse<ProfileData>>(
        "/profiles",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      throw new Error(error.message || "Failed to create profile");
    }
  },

  getProfile: async (userId: string): Promise<ApiResponse<ProfileData>> => {
    try {
      const token = await getAccessToken();

      const response = await ApiClient.get<ApiResponse<ProfileData>>(
        `/profiles/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      throw new Error(error.message || "Failed to get profile");
    }
  },

  updateProfile: async (
    userId: string,
    updateData: UpdateProfileRequest
  ): Promise<ApiResponse<ProfileData>> => {
    try {
      const token = await getAccessToken();
      const formData = new FormData();

      // Append updated fields
      if (updateData.name) formData.append("name", updateData.name);
      if (updateData.phoneNumber)
        formData.append("phoneNumber", updateData.phoneNumber);
      if (updateData.gender) formData.append("gender", updateData.gender);
      if (updateData.dateOfBirth)
        formData.append("dateOfBirth", updateData.dateOfBirth);

      // Fix: Properly append avatar for React Native environment
      if (updateData.avatar) {
        const uriParts = updateData.avatar.uri.split(".");
        const fileType = uriParts[uriParts.length - 1];

        // @ts-ignore - React Native's FormData implementation accepts this format
        formData.append("avatar", {
          uri: updateData.avatar.uri,
          name: `profile-${userId}.${fileType}`,
          type: `image/${fileType}`,
        });
      }

      const response = await ApiClient.put<ApiResponse<ProfileData>>(
        `/profiles/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      throw new Error(error.message || "Failed to update profile");
    }
  },

  addAddress: async (
    userId: string,
    address: Address
  ): Promise<ApiResponse<ProfileData>> => {
    try {
      const token = await getAccessToken();

      const response = await ApiClient.post<ApiResponse<ProfileData>>(
        `/profiles/${userId}/addresses`,
        address,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      throw new Error(error.message || "Failed to add address");
    }
  },

  updateAddress: async (
    userId: string,
    addressId: string,
    address: Address
  ): Promise<ApiResponse<ProfileData>> => {
    try {
      const token = await getAccessToken();

      const response = await ApiClient.put<ApiResponse<ProfileData>>(
        `/profiles/${userId}/addresses/${addressId}`,
        address,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      throw new Error(error.message || "Failed to update address");
    }
  },

  deleteAddress: async (
    userId: string,
    addressId: string
  ): Promise<ApiResponse<ProfileData>> => {
    try {
      const token = await getAccessToken();

      const response = await ApiClient.delete<ApiResponse<ProfileData>>(
        `/profiles/${userId}/addresses/${addressId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      throw new Error(error.message || "Failed to delete address");
    }
  },

  setDefaultAddress: async (
    userId: string,
    addressId: string
  ): Promise<ApiResponse<ProfileData>> => {
    try {
      const token = await getAccessToken();

      const response = await ApiClient.put<ApiResponse<ProfileData>>(
        `/profiles/${userId}/addresses/${addressId}/default`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error: any) {
      throw new Error(error.message || "Failed to set default address");
    }
  },
};

// Profile data interfaces
export interface ProfileData {
  id?: string;
  userId: string;
  name: string;
  phoneNumber: string;
  gender: "MALE" | "FEMALE" | "OTHER";
  dateOfBirth: string;
  avatarUrl?: string;
  addresses: Address[];
}

export interface Address {
  id?: string;
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault?: boolean;
}

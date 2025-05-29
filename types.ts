
export interface OnboardingContent {
  id: number;
  imageSrc: string;
  text: string;
}

export interface UserAccount {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface PromotionItem {
  id: string;
  name: string;
  imageUrl: string;
  discount?: string; // e.g., "20% OFF"
}

export interface StoreItem {
  id: string;
  name: string;
  imageUrl: string;
  distance?: string; // e.g., "1.5km"
}

export interface CouponItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string; // Could be a brand logo or relevant image
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'layout' | 'smartphone' | 'search' | 'shopping-bag';
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
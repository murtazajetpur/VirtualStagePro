export interface Plan {
  id: string;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  credits: number;
  features: string[];
  isPopular?: boolean;
  color?: string;
}

export enum RoomType {
  LIVING_ROOM = 'Living Room',
  BEDROOM = 'Bedroom',
  KITCHEN = 'Kitchen',
  DINING_ROOM = 'Dining Room',
  OFFICE = 'Office',
  BATHROOM = 'Bathroom',
  OUTDOOR = 'Outdoor'
}

export enum DesignStyle {
  MODERN = 'Modern',
  SCANDINAVIAN = 'Scandinavian',
  INDUSTRIAL = 'Industrial',
  MID_CENTURY = 'Mid-Century Modern',
  LUXURY = 'Luxury',
  COASTAL = 'Coastal',
  FARMHOUSE = 'Farmhouse'
}

export enum StagingMode {
  STAGING = 'Virtual Staging',
  DECLUTTER = 'Decluttering'
}

export interface Project {
  id: string;
  name: string;
  date: string;
  thumbnail: string;
  originalImage: string;
  generatedImage: string;
  status: 'processing' | 'completed';
}

export type ProcessingState = 'upload' | 'configure' | 'processing' | 'result';
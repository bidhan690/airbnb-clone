export interface ListingType {
  id: string;
  title: string;
  description: string;
  host: string;
  imageSrc: string;
  createdAt?: Date;
  category: string;
  amenities: string[];
  price: number;
  locationValue: string;
}

export interface ContentType {
  id: number;
  title: string;
  src: string;
  show: boolean;
}

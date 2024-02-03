import { z } from "zod";

export const listingSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  price: z.number().min(0),
  imageSrc: z.string().url(),
  location: z.string(),
  locationValue: z.string(),
  amenities: z.string(),
  category: z.string(),
  roomCount: z.number().min(0),
  bathroomCount: z.number().min(0),
  guestCount: z.number().min(0),
});

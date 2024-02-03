import { Inter, Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-roboto",
});

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

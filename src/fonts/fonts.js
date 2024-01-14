import { Inter, Kalam, Rubik } from "next/font/google";

export const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });
export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const kalam = Kalam({
    subsets: ["latin"],
    variable: "--font-kalam",
    weight: ["300", "400", "700"],
});

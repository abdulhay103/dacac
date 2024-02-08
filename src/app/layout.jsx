import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Toaster } from "react-hot-toast";
import { inter, kalam, rubik } from "@/fonts/fonts";

export const metadata = {
    title: "Home | Dream Angels Centre for Autistic Children (DACAC)",
    description:
        "Dream Angels Centre for Autistic Children (DACAC) is a specialized centre for physically and mentally challenged children between the ages of 2- 8 years especially with symptoms of AUTISM. DACAC is run and managed by professional speech therapists, occupational therapists, physiotherapists and special educators ably supported by caregivers and administrative staff.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`w-full overflow-y-auto ${inter.variable} ${rubik.variable} ${kalam.variable}`}
            >
                <Toaster position="top-center" />
                {children}
            </body>
        </html>
    );
}

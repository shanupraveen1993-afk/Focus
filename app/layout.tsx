import type { Metadata, Viewport } from "next";
import { Red_Hat_Display, Red_Hat_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import ScrollReset from "./components/ScrollReset";

const redHatDisplay = Red_Hat_Display({ variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "600", "700", "900"] });
const redHatMono = Red_Hat_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Shanmuga Praveen — UX Designer",
  description: "Portfolio of Shanmuga Praveen — UX Designer specialising in B2B SaaS, AI product design, design systems, user research, and shipped products.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${redHatDisplay.variable} ${redHatMono.variable}`}>
      <body>
        <ScrollReset />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

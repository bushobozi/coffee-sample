import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { LayoutProps } from "./types/LayoutProps";
import { NavBar } from "./components";
import PageTransition from "./components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coffee in Uganda",
  description: "My coffee",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

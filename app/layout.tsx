import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BackgroundOverlay from "./components/BackgroundOverlay";
import FloatingBeeCursor from "./components/FloatingBeeCursor";
import { CustomToaster } from "./components/CustomToast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HackConcordia",
  description:
    "HackConcordia is a student-run tech community at Concordia University, organizing ConUHacks, Quebec's largest 24-hour hackathon.",
  openGraph: {
    title: "HackConcordia",
    description:
      "HackConcordia is a student-run tech community at Concordia University, organizing ConUHacks, Quebec's largest 24-hour hackathon.",
    url: "https://www.hackconcordia.io",
    siteName: "HackConcordia",
    images: [
      {
        url: "https://www.hackconcordia.io/imgs/HC_logo.png",
        width: 800,
        height: 600,
        alt: "HackConcordia Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HackConcordia",
    description:
      "HackConcordia is a student-run tech community at Concordia University, organizing ConUHacks, Quebec's largest 24-hour hackathon.",
    images: ["https://www.hackconcordia.io/imgs/HC_logo.png"],
    creator: "@HackConcordia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="hidden md:flex">
          <BackgroundOverlay />
        </div>
        <Header />
        <main className="pt-15">
          <div className="hidden md:flex">
            <FloatingBeeCursor />
          </div>
          {children}
          <CustomToaster />
        </main>
        <Footer />
      </body>
    </html>
  );
}

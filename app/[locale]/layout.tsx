import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BackgroundOverlay from "@/components/BackgroundOverlay";
import FloatingBeeCursor from "@/components/FloatingBeeCursor";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getMessages } from "next-intl/server";

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
  description: "HackConcordia is a club at Concordia University that organizes ConuHacks and other hackathons.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   const messages = await getMessages();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <div className="hidden md:flex">
          <BackgroundOverlay />
        </div>
        <Header />
        <main className="pt-15">
          <div className="hidden md:flex">
            <FloatingBeeCursor />
          </div>
          {children}
        </main>
        <Footer />
        </NextIntlClientProvider>
        
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GNB from "./components/GNB";
import FNB from "./components/FNB";

import QuickMenu from "./components/QuickMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "평원산업",
  description: "평원 산업 사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-pretendard`}>
        <GNB />
        <div className="min-h-screen h-full">{children}</div>

        <QuickMenu />
        <FNB />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GNB from "./components/GNB";
import Footer from "./components/Footer";

import QuickMenu from "./components/QuickMenu";
import TopButton from "./components/TopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pwin.co.kr"),
  title: {
    default: "평원산업 | 친환경 보강토·축조·호안 블록",
    template: "%s | 평원산업",
  },
  description: "인증받은 기술력으로 친환경 건설의 미래를 만드는 평원산업. 보강토블록, 캡블록, 축조블록, 호안블록 제품과 시공사례를 확인하세요.",
  keywords: ["평원산업", "pwin", "보강토블록", "축조블록", "호안블록", "캡블록", "옹벽블록", "친환경 건설자재", "가평 건설자재"],
  openGraph: {
    title: "평원산업 | 친환경 보강토·축조·호안 블록",
    description: "인증받은 기술력으로 친환경 건설의 미래를 만드는 평원산업...",
    url: "https://www.pwin.co.kr",
    images: [{ url: "/images/OpenGraph_thumbnail.png", width: 1200, height: 630 }],
  },
  other: {
    // "google-site-verification": "구글_콘솔에서_받은_코드", // e.g. abcdefg...
    "naver-site-verification": "796207cd9cc7479383137c7ce21eec72b33b6a57", // e.g. 1234567...
  },
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
        <link rel="icon" href="/favicon.png" sizes="any" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@type": "Organization",
                    name: "보강토(회색)",
                    image: "/images/products/보강토/gray_.png",
                    url: "https://www.pwin.co.kr/products?type=retaining",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@type": "Organization",
                    name: "캡블록(회색)",
                    image: "/images/products/캡블록/gray.png",
                    url: "https://www.pwin.co.kr/products?type=cap",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@type": "Organization",
                    name: "축조블록(타원형)",
                    image: "/images/products/식생축조/gray.png",
                    url: "https://www.pwin.co.kr/products?type=masonry",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  item: {
                    "@type": "Organization",
                    name: "축조블록(평면형)",
                    image: "/images/products/식생축조/gray_plane.png",
                    url: "https://www.pwin.co.kr/products?type=masonry",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  item: {
                    "@type": "Organization",
                    name: "호안블록",
                    image: "/images/products/환경호안블록/gray.png",
                    url: "https://www.pwin.co.kr/products?type=eco",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased font-pretendard`}>
        <GNB />
        <TopButton />
        <QuickMenu />
        <div className="flex flex-col min-h-screen">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

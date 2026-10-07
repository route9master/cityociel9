import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `${SITE.name} | 분양 문의 ${SITE.tel}`,
  description:
    "인천 미추홀구 학익동 시티오씨엘 9단지. 최고 49층 9개동 총 1,949세대(전용 59~136㎡). 분양 상담 1800-7159.",
  openGraph: {
    url: "/",
    title: `${SITE.name} | 분양 문의 ${SITE.tel}`,
    description: "최고 49층 9개동 총 1,949세대. 시티오씨엘, 마침내 정점.",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
    locale: "ko_KR",
    type: "website",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#141A33",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta name="color-scheme" content="light" />
        <style>{`html,body{background:#F3F1EC;color:#141A33}`}</style>
        <link rel="preload" href="/fonts/Pretendard-SemiBold.subset.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/Pretendard-Regular.subset.woff2" as="font" type="font/woff2" crossOrigin="" />
      </head>
      <body>{children}</body>
    </html>
  );
}

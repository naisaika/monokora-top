import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const NotoSansJPFont = Noto_Sans_JP({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "モノづくりコラボフォーラム",
  description: "Factor Xの企業交流会「モノづくりコラボフォーラム」の紹介ページです。過去に開催されたモノコラのアーカイブもご覧いただけます。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="ja">
      <head>
        <meta property="og:title" content="モノづくりコラボフォーラム" />
        <meta property="og:description" content="Factor Xの企業交流会「モノづくりコラボフォーラム」の紹介ページです。過去に開催されたモノコラのアーカイブもご覧いただけます。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.factorx.jp/event/index.html" />
        <meta property="og:image" content="https://www.factorx.jp/event/OGP.jpg" />
        <meta property="og:site_name" content="モノづくりコラボフォーラム" />
        <meta property="og:locale" content="ja_JP"/>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="モノづくりコラボフォーラム" />
        <meta name="twitter:description" content="Factor Xの企業交流会「モノづくりコラボフォーラム」の紹介ページです。過去に開催されたモノコラのアーカイブもご覧いただけます。" />
        <meta name="twitter:image" content="https://www.factorx.jp/event/OGP.jpg" />
      </head>
      <body className={NotoSansJPFont.className}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Script from "next/script";

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
  const gtmScript = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KRTD2K4');
  `;

  return (
    <html lang="ja">
      <head>
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="afterInteractive"
        />
        <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
        <meta property="og:title" content="モノづくりコラボフォーラム" />
        <meta property="og:description" content="Factor Xの企業交流会「モノづくりコラボフォーラム」の紹介ページです。過去に開催されたモノコラのアーカイブもご覧いただけます。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.factorx.jp/event/index.html" />
        <meta property="og:image" content="https://www.factorx.jp/event/assets/img/OGP.jpg" />
        <meta property="og:site_name" content="モノづくりコラボフォーラム" />
        <meta property="og:locale" content="ja_JP"/>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="モノづくりコラボフォーラム" />
        <meta name="twitter:description" content="Factor Xの企業交流会「モノづくりコラボフォーラム」の紹介ページです。過去に開催されたモノコラのアーカイブもご覧いただけます。" />
        <meta name="twitter:image" content="https://www.factorx.jp/event/assets/img/OGP.jpg" />
        <meta name="format-detection" content="telephone=no"></meta>
      </head>
      <body className={NotoSansJPFont.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KRTD2K4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
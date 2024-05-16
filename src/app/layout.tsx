// import AdsterraAdComponent1 from "@/components/ads/adsterra/AdsterraAdComponent1";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import LatestNews from "@/components/shared/LatestNews";
import RelatedNews from "@/components/shared/RelatedNews";
// import AdsterraScript from "@/components/ads/adsterra/Scripts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Strender",
    template: "%s | Strender",
  },
  description:
    "Your one stop platform for all kinds of news, posts and updates on all things related to sport",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <AdsterraScript /> */}
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Your one stop platform for all kinds of news, posts and updates on all things related to sport"
        />
        {/* <link rel="icon" type="image/svg+xml" href="/vite.svg" /> */}
        <link
          rel="shortcut icon"
          href="/assets/images/application-logo.png"
          type="image/x-icon"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.1.0/uicons-thin-straight/css/uicons-thin-straight.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.1.0/uicons-regular-rounded/css/uicons-regular-rounded.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.1.0/uicons-regular-straight/css/uicons-regular-straight.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.1.0/uicons-brands/css/uicons-brands.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.2.0/uicons-thin-rounded/css/uicons-thin-rounded.css"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="google-adsense-account" content="ca-pub-2431766066357656" />
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2431766066357656"
          crossOrigin="anonymous"
        ></script> */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="google-adsense-account" content="ca-pub-2431766066357656" />
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2431766066357656"
          crossOrigin="anonymous"
        ></script> */}
      </head>
      <body className={inter.className + " bg-cs-dark"}>
        <Navbar />
        <div className="">{children}</div>
        {/* <AdsterraAdComponent1 /> */}
        <div className="mainComponent">
          <LatestNews />
        </div>
        <div className="mainComponent">
          <RelatedNews />
        </div>
        <Footer />
      </body>
    </html>
  );
}

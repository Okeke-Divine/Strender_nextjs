import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import GoogleAnalytics from "@/components/shared/GoogleAnalytics"
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import LatestNews from "@/components/shared/LatestNews";
import RelatedNews from "@/components/shared/RelatedNews";
import MyAdCashAdScript from "@/components/ads/myadcash/MyAdCashAdScript"
import MyAdCashAdBanner1 from "@/components/ads/myadcash/MyAdCashAdBanner1"
import HilltopAdBanner1 from "@/components/ads/Hilltop/HilltopAdBanner1"
// import AdsterraAdSense from "@/components/ads/adsterra/Scripts";
// import AdsterraAdComponent1 from "@/components/ads/adsterra/AdsterraAdComponent1";

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
        <MyAdCashAdScript />
        <GoogleAnalytics />
        {/* <AdsterraAdSense /> */}
        <meta charSet="UTF-8" />
        {/* <meta name="monetag" content="440c1d2982786d7eaa2771d8286f3113" /> */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Your one stop platform for all kinds of news, posts and updates on all things related to sport"
        />
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
        {/* <meta name="google-adsense-account" content="ca-pub-2431766066357656" /> */}
        <link rel="manifest" href="/manifest.json" />
        {/* <meta name="google-adsense-account" content="ca-pub-2431766066357656" /> */}
        {/* hilltop ads */}
        <meta name="fe2f22f3f35efd1673376dc47f3a1a1b8aa2b4e3" content="fe2f22f3f35efd1673376dc47f3a1a1b8aa2b4e3" />
      </head>
      {/* Begin Money tag */}
      {/* <Script src="https://glizauvo.net/401/7529982" /> */}
      {/* <Script src="https://fortorterrar.com/400/7529967" /> */}
      {/* end money tag */}
      <body className={inter.className + " bg-cs-dark"}>
        <Navbar />
        <MyAdCashAdBanner1 />
        <HilltopAdBanner1 />
        {/* <AdsterraAdComponent1 /> */}
        <div className="mainLayout">
          {/* <Link
            href="https://dubzenom.com/4/7530232"
            className="text-xl font-bold text-white"
          >
            Suprise!!! (2.0)
          </Link> */}
        </div>
        <div className="">{children}</div>
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

// "use client";

// import AdsterraAdComponent1 from "@/components/ads/adsterra/AdsterraAdComponent1";
// import AdsterraAdComponent2 from "@/components/ads/adsterra/AdsterraAdComponent2";
// import AdsterraAdComponent3 from "@/components/ads/adsterra/AdsterraAdComponent3";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <AdsterraAdComponent1 /> */}
      <div>{children}</div>
      {/* <AdsterraAdComponent2 /> */}
      {/* <AdsterraAdComponent3 /> */}
    </>
  );
}

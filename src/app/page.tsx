// "use client";
// import AdsterraAdComponent1 from "@/components/ads/adsterra/AdsterraAdComponent1";
import PartialHero from "@/components/home/PartialHero";
import Category from "@/components/shared/Category";
import MostRead from "@/components/shared/MostRead";

export default function Home() {
  return (
    <>
      <PartialHero />
      {/* <AdsterraAdComponent1 /> */}
      <main className="mainComponent">
        <Category />
        <MostRead />
      </main>
    </>
  );
}

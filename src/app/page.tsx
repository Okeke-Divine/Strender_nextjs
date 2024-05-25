import AdsterraAdIframe1 from "@/components/ads/adsterra/AdsterraAdIframe1";
import PartialHero from "@/components/home/PartialHero";
import Category from "@/components/shared/Category";
import MostRead from "@/components/shared/MostRead";
import { incrementTotalViews } from "@/store";

export const dynamic = "force-dynamic";

export default function Home() {
  incrementTotalViews();
  return (
    <>
      <PartialHero />
      <main className="mainComponent">
        <Category />
        <MostRead />
        {/* <AdsterraAdIframe1 /> */}
      </main>
    </>
  );
}

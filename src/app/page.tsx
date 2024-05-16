import PartialHero from "@/components/home/PartialHero";
import Category from "@/components/shared/Category";
import MostRead from "@/components/shared/MostRead";

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <>
      <PartialHero />
      <main className="mainComponent">
        <Category />
        <MostRead />
      </main>
    </>
  );
}

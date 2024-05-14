import PartialHero from "@/components/home/PartialHero";
import Category from "@/components/shared/Category";

export default function Home() {
  return (
    <>
      <PartialHero />
      <main className="mainComponent">
        <Category />
      </main>
    </>
  );
}

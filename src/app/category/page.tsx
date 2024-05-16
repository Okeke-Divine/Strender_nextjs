// import AdsterraAdComponent1 from "@/components/ads/adsterra/AdsterraAdComponent1";
import Category from "@/components/shared/Category";

export const metadata = {
  title: "Categories",
};

export const dynamic = 'force-dynamic'

export default function CategoryPage() {
  return (
    <>
      <main className="mainComponent">
        {/* <AdsterraAdComponent1 /> */}
        <Category />
      </main>
    </>
  );
}

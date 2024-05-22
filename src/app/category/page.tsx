import Category from "@/components/shared/Category";
import { incrementTotalViews } from "@/store";

export const metadata = {
  title: "Categories",
};

export const dynamic = "force-dynamic";

export default function CategoryPage() {
  incrementTotalViews();
  return (
    <>
      <main className="mainComponent">
        <Category />
      </main>
    </>
  );
}

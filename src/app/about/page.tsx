// import AdsterraAdComponent1 from "@/components/ads/adsterra/AdsterraAdComponent1";
import AdsterraAdComponent1 from "@/components/ads/adsterra/AdsterraAdComponent1";
import AboutJson from "@/data/about.json";
import { incrementTotalViews } from "@/store";

export const metadata = {
  title: "About",
};

export default function About() {
  incrementTotalViews();
  return (
    <>
    {/* <AdsterraAdComponent1 /> */}
    <AdsterraAdComponent1 />
      <main className="mainComponent">
        {AboutJson.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              {section.sectionTitle}
            </h2>
            <p className="text-gray-400">{section.sectionDesc}</p>
          </div>
        ))}
      </main>
    </>
  );
}

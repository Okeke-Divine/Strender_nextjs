import TC from "@/data/T&C.json";
import { incrementTotalViews } from "@/store";

export const metadata = {
  title: "Terms and Conditions",
};

export default function TermsAndConditions() {
  incrementTotalViews();
  return (
    <>
      <main className="mainComponent">
        {TC.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              {section.title}
            </h2>
            <ul className="list-disc list-inside">
              {section.content.map((item, idx) => (
                <li key={idx} className="text-gray-400 mb-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </>
  );
}

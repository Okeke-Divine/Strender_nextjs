import PrivacyPolicyData from "@/data/PrivacyPolicy.json";
export const metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <>
      <main className="mainComponent">
        {PrivacyPolicyData.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              {section.title}
            </h2>
            {section.content.map((content, idx) => (
              <p key={idx} className="text-gray-400">
                {content}
              </p>
            ))}
          </div>
        ))}
      </main>
    </>
  );
}

import config from "@/data/config.json"
import SocialIconComp1 from "@/components/shared/SocialIconComp1";

function PartialHero() {
    const siteDesc = config.description
    return (
      <>
        <div className="p-5 md:py-8 px-5 md:px-10 bg-cs-dark-light">
          <div>
            <div className="font-bold text-5xl">
              <span className="cs-text-yellow-1">Sports</span>{" "}
              <span className="text-gray-400">articles</span>
            </div>
            <div className="w-[40%] my-7">
              <div className="w-full bg-gray-700 h-[1px]"></div>
            </div>
            <div className="block md:flex justify-between items-center">
              <div className="text-gray-400">
                {siteDesc}
              </div>
              <div className="flex mt-2 md:mt-0 gap-x-2 md:gap-x-3 items-center">
                <SocialIconComp1 iconClass="fi fi-brands-instagram" url="#" />
                <SocialIconComp1 iconClass="fi fi-brands-facebook" url="#" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
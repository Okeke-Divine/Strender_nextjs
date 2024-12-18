import Link from "next/link";
import config from "@/data/config.json";
import AdsterraAdIframe1 from "../ads/adsterra/AdsterraAdIframe1";

interface FooterLinkType {
  name: string;
  url: string;
}

const links1: FooterLinkType[] = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Category",
    url: "/category",
  },
  {
    name: "Discover",
    url: "/discover",
  },
  {
    name: "About",
    url: "/about",
  },
  { url: "/contact-us", name: "Contact Us" },
];

export default function Footer() {
  return (
    <>
      <div className="mt-5 p-5 md:py-8 px-5 md:px-10 bg-cs-dark-light">
        <div className="block md:flex justify-between">
          <div className="w-full md:w-1/3">
            <div className="text-white font-bold text-4xl cursor-pointer">
              <Link className="site_postLinks " href="/">
                {config.site_name}
              </Link>
            </div>
            <div className="text-gray-400 max-w-[60%] mt-1">
              {config.description}
            </div>
          </div>
          <div className="mt-5 md:mt-0 w-full md:w-3/4 block md:flex gap-x-2 justify-between">
            {/* footer link container */}
            <div className="mt-1 md:mt-0 w-full md:w-1/3 p-2">
              <div className="font-bold text-xl text-white">Links (Pages)</div>
              <div className="mt-2">
                {links1.map((link, index) => (
                  <div key={index}>
                    <Link
                      href={link.url}
                      className="text-gray-400 duration-300 hover:text-white site_postLinks"
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {/* footer link container */}
            <div className="mt-1 md:mt-0 w-full md:w-1/3 p-2">
              <div className="font-bold text-xl text-white">Legal</div>
              {/* <div className="mt-2">
                <Link
                  href="/t&c"
                  className="text-gray-400 duration-300 hover:text-white site_postLinks"
                >
                  Terms & Conditions
                </Link>
              </div> */}
              <div>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 duration-300 hover:text-white site_postLinks"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
            {/* footer link container */}
            <div className="mt-1 md:mt-0 w-full md:w-1/3 p-2">
              <div className="font-bold text-xl text-white">Extra (Other)</div>
              <div className="mt-2">
                <div>
                  <Link
                    href="/credits"
                    className="text-gray-400 duration-300 hover:text-white site_postLinks"
                  >
                    Credits
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end flex */}
        <div className="w-[100%] my-3">
          <div className="w-full bg-gray-700 h-[1px]"></div>
        </div>
        {/* <div className="text-center text-white font-semibold text-md">
          &copy; {config.site_name} 2024 - Built by{" "}
          <Link
            href="https://okekedivine.vercel.app"
            target={"_blank"}
          >
            <span className="cs-text-yellow-1">Dev Divine</span>
          </Link>{" "}
          | {config.site_name} claims no right to any content here
        </div> */}
      </div>
      {/* <AdsterraAdIframe1 /> */}
    </>
  );
}

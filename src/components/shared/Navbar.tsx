"use client";
import Link from "next/link";
import { useState } from "react";
import config from "@/data/config.json";
import { usePathname } from "next/navigation";

interface NavbarLinkItem {
  url: string;
  name: string;
  smallScreenOnly: boolean;
}

const links: NavbarLinkItem[] = [
  { url: "/home", name: "Home", smallScreenOnly: false },
  { url: "/category", name: "Category", smallScreenOnly: false },
  { url: "/discover", name: "Discover", smallScreenOnly: false },
  // { url: "/news", name: "News" },
  { url: "/about", name: "About", smallScreenOnly: false },
  { url: "/credits", name: "Credits", smallScreenOnly: true },
  { url: "/privacy-policy", name: "Privacy Policy", smallScreenOnly: true },
  { url: "/t&c", name: "T & C", smallScreenOnly: true },
];

export default function Navbar() {
  const site_name = config.site_name;
  const [disSidebar, setDisSidebar] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="p-5 md:py-8 px-5 md:px-10 bg-cs-dark-light">
        <div className="flex justify-between items-center flex-wrap">
          <div className="block sm:flex items-center sm:gap-x-5 md:gap-x-16 lg:gap-x-32 duration-300">
            <div className="flex gap-x-2 items-center text-white font-bold text-2xl md:text-3xl cursor-pointer">
              <div>
                <img
                  src="/assets/images/application-logo.png"
                  className="w-7 h-7"
                />
              </div>
              <div>
                {" "}
                <Link href="/">{site_name}</Link>
              </div>
            </div>
            {/* begin link container */}
            <div
              className={`fixed top-0 ${
                disSidebar == true ? "left-0" : "-left-[200%]"
              } sm:static h-screen sm:h-fit overflow-y-auto w-[250px] sm:w-fit bg-cs-dark-light sm:flex items-center sm:gap-x-3 md:gap-x-5 duration-300 pl-10 pt-10 sm:pl-0 sm:pt-0 sm:overflow-y-hidden shadow-sm sm:shadow-none text-xl sm:text-base z-[1000] sm:z-[1]`}
            >
              {links.map((link, index) => (
                <div key={index}>
                  <Link
                    className={`${
                      link.url == pathname
                        ? "text-white font-bold border-b-[2px]"
                        : "text-gray-400"
                    } border-yellow-300 duration-300 hover:text-white ${
                      link.smallScreenOnly ? "block sm:hidden" : ""
                    } w-fit`}
                    href={link.url}
                    onClick={() => setDisSidebar(false)}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </div>
            {/* end link container */}
          </div>
          {/* login and signup button */}
          <div className="flex gap-x-4">
            {/* <div>
              <button className="duration-300 hover:bg-gray-600 hover:text-white rounded-3xl border-[1px] text-gray-200 border-gray-200 p-1 px-4 md:p-2 md:px-5 cursor-pointer">
                Login
              </button>
            </div>
            <div>
              <button className="duration-300 hover:bg-gray-700 rounded-3xl border-[1px] text-white bg-gray-600 border-gray-200 p-1 px-4 md:p-2 md:px-5 cursor-pointer">
                Signup
              </button>
            </div> */}
            <Link href="/discover?action=search">
              <div className="rounded-full bg-gray-600 w-10 h-10 text-white flex justify-center items-center cursor-pointer">
                <i className={`fi fi-ts-category relative top-[0.1rem]`}></i>
              </div>
            </Link>
            <div
              className="flex md:hidden rounded-full bg-gray-600 w-10 h-10 text-white justify-center items-center cursor-pointer"
              onClick={() => setDisSidebar(true)}
            >
              <i
                className={`fi fi-ts-bars-staggered relative top-[0.1rem]`}
              ></i>
            </div>
          </div>
        </div>
      </div>

      {/* sidebar overlay */}
      <div
        className={`${
          disSidebar == true ? "block" : "hidden"
        } fixed top-0 left-0 w-[100%] h-screen bg-black bg-opacity-70 z-[999] sm:hidden`}
        onClick={() => setDisSidebar(false)}
      ></div>
    </>
  );
}

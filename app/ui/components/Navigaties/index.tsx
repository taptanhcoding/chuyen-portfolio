import { useScroll } from "@/app/lib/react-hooks/useScroll";
import classNames from "classnames";
import React from "react";
import { NavItems, size } from "./data";
import NavItem from "./components/navitem";
import { NavProps } from "./type";
import LeftItem from "./components/leftitem";
import SwitchTheme from "../Switch";

export function Navigaties() {
  return (
    <div className="mx-auto hidden md:grid mt-4 mb-32  text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left ">
      {NavItems.map((nav: NavProps, index) => (
        <NavItem
          key={index + 1}
          {...nav}
          aos={index + 1 > 2 ? "fade-left" : "fade-right"}
        />
      ))}
    </div>
  );
}

export function LeftNavigaties() {
  let clientX = useScroll();
  return (
    <div
      className={classNames(
        "hidden md:fixed left-0 w-fit text-black dark:text-red-600 bg-[#f1f1f1d9] rounded-md opacity-60 h-fit top-1/2 -translate-y-1/2 -translate-x-[100%] transition ease-in-out delay-150 md:flex flex-col",
        clientX.scrollToTop >= clientX.windowHeight * 0.5 && "!translate-x-0"
      )}
    >
      {NavItems.map((nav: NavProps, index) => (
        <LeftItem key={index + 1} {...nav} />
      ))}

      <LeftItem
        icon={
          <svg
            width={size}
            height={size}
            viewBox="-3 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="icomoon-ignore"> </g>{" "}
              <path
                d="M26.221 16c0-7.243-5.871-13.113-13.113-13.113s-13.113 5.87-13.113 13.113c0 7.242 5.871 13.113 13.113 13.113s13.113-5.871 13.113-13.113zM1.045 16c0-6.652 5.412-12.064 12.064-12.064s12.064 5.412 12.064 12.064c0 6.652-5.411 12.064-12.064 12.064-6.652 0-12.064-5.412-12.064-12.064z"
                fill="currentColor"
              >
                {" "}
              </path>{" "}
              <path
                d="M18.746 15.204l0.742-0.742-6.379-6.379-6.378 6.379 0.742 0.742 5.112-5.112v12.727h1.049v-12.727z"
                fill="currentColor"
              >
                {" "}
              </path>{" "}
            </g>
          </svg>
        }
        link="#top"
        title="to-top"
        description=""
      />
    </div>
  );
}

export function MobileNavigaties() {
  return (
    <div
      className={`z-50 block sticky top-0 md:hidden w-screen bg-slate-300  text-black dark:text-red-600`}
    >
      <div className="relative p-2">
        <div className="group w-fit">
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M4 6H20M4 12H14M4 18H9"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
          <div className="absolute left-0 hidden group-hover:block bg-slate-300 w-screen p-2">
            {NavItems.map((nav: NavProps, index) => (
              <a key={index} href={nav.link} className="block">
                {nav.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-3 right-2">
        <SwitchTheme />
      </div>
    </div>
  );
}

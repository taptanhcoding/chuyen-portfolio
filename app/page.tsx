"use client";
import Image from "next/image";
import SwitchTheme from "./ui/components/Switch";
import LeftMenu from "./ui/components/left-menu";
import {
  LeftNavigaties,
  MobileNavigaties,
  Navigaties,
} from "./ui/components/Navigaties";
import HomeItem from "./ui/components/HomeItem/homeItem";
import { AboutMe, Contact, Skill } from "./ui/data";
import SkillItem, { SkillProps } from "./ui/components/SkillItem";
// import { handleSubmit } from "./lib/action";
import FormSend from "./ui/components/FormSend";
import avatar from "@/public/avatar.jpeg"

export default function Home() {
  return (
    <div className={``}>
      <main className="children flex min-h-screen flex-col items-center justify-between p-24 pt-0">
        <MobileNavigaties />
        <div className="pt-24">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mx-auto">
            <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
              <a
                className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                rel="noopener noreferrer"
              >
                By{" "}
                <code className="admin font-semibold text-xl">
                  {"<ChuyenDEV>"}{" "}
                </code>
              </a>
            </div>
            <div className="hidden md:block">
              <SwitchTheme />
            </div>
          </div>
          {/* title  */}
          <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <div className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert text-center text-black">
              <h1 className="text-[37px]">LE CONG CHUYEN</h1>
              <h2 className="text-[20px]">website developer.</h2>
            </div>
            <div className="w-[100vw] h-[30vw]">
              <Image
                className="object-cover w-full h-full"
                src={avatar}
                alt="chuyendev"
                sizes="100vw"
                // Make the image display full width
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>
          {/* categories */}
          <Navigaties />
          {/* about  */}
          <HomeItem title={AboutMe.title} id="About-me">
            <div className="text-center px-16">{AboutMe.description}</div>
          </HomeItem>

          {/* skill  */}
          <HomeItem title={Skill.title} id="Skill">
            {/* {Skill.techs} */}
            <div className="grid grid-cols-2 md:grid-cols-4 ">
              {Skill.techs
                .filter((sk) => sk.status == "Active")
                .map((sk, index) => (
                  <SkillItem key={index} {...sk} />
                ))}
            </div>
          </HomeItem>

          {/* project  */}
          <HomeItem title="Project" id="Project">
            Các project đã cũ và sẽ được cập nhật sớm
          </HomeItem>

          {/* contact  */}
          <HomeItem title={Contact.title} id="Contact">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-4">
                <h5 className="text-[28px]">Contact Info</h5>
                {Contact.contacts.map((ct, index) => (
                  <div className="py-4 flex flex-row" key={index + 1}>
                    {ct.icon} {ct.content}
                  </div>
                ))}
              </div>
              <div className="p-4">
                <h5 className="text-[28px]">Contact Form</h5>
                <div>
                  <FormSend />
                </div>
              </div>
            </div>
          </HomeItem>

          <LeftNavigaties />
        </div>
      </main>
    </div>
  );
}

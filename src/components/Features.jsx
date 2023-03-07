import { useState } from "react";
import Feat1 from "../assets/illustration-features-tab-1.svg";
import Feat2 from "../assets/illustration-features-tab-2.svg";
import Feat3 from "../assets/illustration-features-tab-3.svg";
import BlueBg from "../UI/BlueBg";
import Btn from "../UI/Btn";
const Feats = [
  {
    id: "Simple Bookmarking",
    icon: Feat1,
    title: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  },
  {
    id: "Speedy Searching",
    icon: Feat2,
    title: "Intelligent Search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  },
  {
    id: "Easy Sharing",
    icon: Feat3,
    title: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button",
  },
];
const Features = () => {
  const [tab, setTab] = useState("Simple Bookmarking");
  const handleTab = (e) => {
    setTab(e);
  };
  const activeClass =
    "relative before:absolute before:left-1/2 before:bottom-0 before:h-1 lg:before:w-full before:w-1/2 before:-translate-x-1/2 before:bg-softRed lg:before:-bottom-0.5";
  return (
    <section className="relative">
      <div className="container mx-auto space-y-8 py-24">
        <header className="space-y-8 text-center ">
          <h2 className="text-3xl font-medium">Features</h2>
          <p className="mx-auto max-w-[600px] text-grayishBlue">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </header>

        <ul className="lg:divide-0 mx-auto items-center justify-center divide-y divide-grayishBlue/50 border-y border-grayishBlue/50 text-center text-xl lg:flex lg:w-fit lg:gap-12 lg:divide-transparent lg:border-t-0">
          <li
            onClick={() => {
              handleTab("Simple Bookmarking");
            }}
            className={`cursor-pointer py-4 ${
              tab === "Simple Bookmarking" ? activeClass : ""
            }`}
          >
            Simple Bookmarking
          </li>
          <li
            onClick={() => {
              handleTab("Speedy Searching");
            }}
            className={`cursor-pointer py-4 ${
              tab === "Speedy Searching" ? activeClass : ""
            }`}
          >
            Speedy Searching
          </li>
          <li
            onClick={() => {
              handleTab("Easy Sharing");
            }}
            className={`cursor-pointer py-4 ${
              tab === "Easy Sharing" ? activeClass : ""
            }`}
          >
            Easy Sharing
          </li>
        </ul>
        <div className="items-center justify-between gap-8 lg:flex">
          <div className="relative py-8 lg:w-1/2 ">
            <img
              src={Feats.find((e) => e.id === tab)?.icon}
              className="ml-auto px-4"
              alt=""
            />
            <BlueBg left stickySide="right-[10%]" roundDir="rounded-r-full" />
          </div>
          <div className="space-y-4 p-4 text-center lg:mx-0 lg:w-1/2  lg:text-left">
            <h3 className="text-3xl font-semibold capitalize text-veryDarkBlue">
              {Feats.find((e) => e.id === tab)?.title}
            </h3>
            <p className="mx-auto max-w-[600px] leading-loose text-grayishBlue lg:mx-0">
              {Feats.find((e) => e.id === tab)?.text}
            </p>
            <Btn bgColor="bg-softBlue" txtColor="text-white" extra="py-2 px-6">
              More Info
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

import { useState, useEffect } from "react";
import Burger from "../assets/icon-hamburger.svg";
import Close from "../assets/icon-close.svg";
import Logo from "../assets/logo-bookmark.svg";
import Btn from "../UI/Btn";
const menuLinks = ["features", "pricing", "contact"];
const mobileStatus = window.innerWidth < 640;
const Header = () => {
  const [mobile, setMobile] = useState(mobileStatus);
  const [isOpen, setIsOpen] = useState(false);
  const menuHandler = () => {
    setIsOpen(false);
    if (window.innerWidth > 640) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  };
  const toggleIsOpen = () => {
    setIsOpen((e) => !e);
  };
  useEffect(() => {
    window.addEventListener("resize", menuHandler);
    return () => {
      window.removeEventListener("resize", menuHandler);
    };
  }, []);
  return (
    <header>
      <div className="container relative mx-auto flex items-center justify-between p-4">
        <img src={Logo} alt="" />
        <nav className="">
          {mobile && (
            <img
              className="cursor-pointer"
              onClick={toggleIsOpen}
              src={isOpen ? Close : Burger}
              alt=""
            />
          )}
          <ul
            className={`shadow-inset absolute top-full left-0 z-50 w-full divide-y overflow-hidden bg-white  px-4 uppercase  shadow-2xl transition-all duration-500 ${
              isOpen ? "h-[264px]" : "h-0"
            }`}
          >
            {menuLinks.map((e, i) => {
              return (
                <li key={i} className="py-4">
                  <a className="transition-all hover:px-4" href="#">
                    {e}
                  </a>
                </li>
              );
            })}
            <li>
              <Btn
                bgColor="bg-softRed"
                txtColor="text-white"
                extra="px-8 py-2 tracking-widest text-sm w-full mt-4"
              >
                LOGIN
              </Btn>
            </li>
          </ul>
          {!mobile && (
            <ul className="flex items-center gap-8">
              {menuLinks.map((e, i) => {
                return (
                  <li
                    className="text-veryDarkGray text-sm uppercase tracking-widest"
                    key={i}
                  >
                    <a href="#">{e}</a>
                  </li>
                );
              })}
              <li>
                <Btn
                  bgColor="bg-softRed"
                  txtColor="text-white"
                  extra="px-8 py-2 tracking-widest text-sm"
                >
                  LOGIN
                </Btn>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

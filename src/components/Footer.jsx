import Logo from "../assets/WhiteFooterLogo.svg";
const lis = ["features", "pricing", "contact"];
import fb from "../assets/icon-facebook.svg";
import tw from "../assets/icon-twitter.svg";
const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue py-8 px-4">
      <div className="container mx-auto flex flex-col items-center gap-8 md:flex-row">
        <img src={Logo} alt="Bookmark Logo Image" />
        <ul className="space-y-8 text-center md:flex md:gap-4 md:space-y-0">
          {lis.map((e, i) => {
            return (
              <li className="uppercase text-white" key={i}>
                <a href="#">{e}</a>
              </li>
            );
          })}
        </ul>
        <div className="ml-auto flex gap-8">
          <img className="cursor-pointer" src={fb} alt="" />
          <img className="cursor-pointer" src={tw} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

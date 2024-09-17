import { Link } from "react-router-dom";
import HeaderLogo from "../../../../assets/image/headerLogo.png";
const Header = () => {
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "What We Do?", link: "/whatWeDo" },
    { name: "Ongoing Trials", link: "/ongoingTrials" },
    { name: "Contact", link: "/contact" },
    { name: "Login", link: "/Login" },
  ];
  return (
    <div className="max-w-[1170px] flex justify-between items-center mx-auto p-4 lg:pt-8 text-white">
      <div className="lg:absolute bg-black left-0 top-0 -mt-2 mx-auto w-full h-4 hidden lg:flex"></div>
      <Link to={"/"}>
        <img src={HeaderLogo} alt={"logo"} />
      </Link>

      <div className="hidden lg:flex gap-10 items-center ">
        <div className="flex items-center gap-8">
          {menuItems.map((item, index) => {
            return (
              <Link to={item.link} key={index}>
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;

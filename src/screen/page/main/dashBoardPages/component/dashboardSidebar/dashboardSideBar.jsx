import logo from "../../../../../../assets/image/logofull.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { SiTestrail } from "react-icons/si";
import { FaUserInjured } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
import { ImProfile } from "react-icons/im";

const menuData = [
    { name: "Dashboard", icon: <LuLayoutDashboard />, link: "/dashboard" },
    { name: "Trials", icon: <SiTestrail />, link: "/dashboard/trials" },
    { name: "My Patients", icon: <FaUserInjured />, link: "/dashboard/patients" },
    { name: "Messages", icon: <BiMessageDetail />, link: "/dashboard/messages" },
    { name: "Settings", icon: <IoSettingsOutline />, link: "/dashboard/settings" },
    { name: "Profile", icon: <ImProfile />, link: "/dashboard/profile" },
    { name: "Logout", icon: <AiOutlineLogout />, link: "" },
];

const DashboardSidebar = () => {
    return (
        <div className="h-screen bg-white">
            <div className="w-full flex items-center px-4">
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
            </div>
            <div className="overflow-y-auto flex flex-col gap-1 p-4">
                {menuData.map((item, index) => (
                    <Link
                        key={index}
                        to={item.link}
                        className="flex items-center gap-2 h-10 rounded-md px-2"
                    >
                        {item.icon} {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default DashboardSidebar;

import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";
const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-gray-200 text-gray-900
                   dark:bg-gray-800 dark:text-gray-100
                   shadow-lg"
    >
      <SideBarIcon icon={<FaFire size="28" />} />
      <Divider />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
      <Divider />
      <SideBarIcon icon={<BsGearFill size="22" />} />
    </div>
  );
};

const SideBarIcon = ({
  icon,
  text = "tooltip 💡",
}: {
  icon: any;
  text?: string;
}) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;
export default SideBar;

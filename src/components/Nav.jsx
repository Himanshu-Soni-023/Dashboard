import React from "react";
import { TbDashboard } from "react-icons/tb";
const Nav = ({ Icon, title }) => {
  return (
    <div
      className="relative flex items-center gap-3 py-3 px-4 rounded-xl overflow-hidden cursor-pointer ease-out
    hover:bg-white/[0.158]"
    >
      {Icon && <Icon className="text-2xl" />}
      <h2 className=" text-lg font-medium ">{title ? title : null}</h2>
    </div>
  );
};

export default Nav;

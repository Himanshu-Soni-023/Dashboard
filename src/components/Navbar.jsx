import React, { useState } from "react";
import Nav from "./Nav";
import { TbDashboard, TbFileUpload } from "react-icons/tb";
import { FiChevronLeft, FiMessageSquare } from "react-icons/fi";
import {
  AiOutlineDollarCircle,
  AiOutlineUserSwitch,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { MdOutlineNotificationsActive, MdSwapHoriz } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { BiDotsHorizontalRounded, BiMessageAltAdd } from "react-icons/bi";
import { VscGraphLine } from "react-icons/vsc";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="sticky top-0 flex flex-col w-1/5 min-h-screen text-white bg-gradient-to-t from-[#810551] to-[#05454d] py-1.5 px-2.5 overflow-hidden ">
      <div
        className="absolute top-0 right-2.5 ml-auto text-xl h-9 aspect-square flex justify-center items-center z-[1] cursor-pointer 
        "
        onClick={() => {
          setNav((prevState) => !prevState);
        }}
      >
        <FiChevronLeft />
      </div>
      <header
        className="relative flex flex-col gap-2.5 pt-6 pb-4 bg-white/[0.377] rounded-xl mb-2.5 justify-center items-center 
      after:absolute after:h-[1px] after:w-4/5 after:bg-white/[0.356] after:bottom-0 "
      >
        <div className="h-1/2 aspect-square rounded-full bg-slate-400 ">
          <img
            src="https://media.istockphoto.com/id/1405265698/photo/portrait-of-mid-adult-man-outdoors.webp?b=1&s=170667a&w=0&k=20&c=x6gzntsYtfbet9ZTpJaAw25r2POL7J4e_WGxLXJNT7E="
            alt="user-img"
            className="h-full aspect-square rounded-full object-cover "
          />
        </div>
        <span className="size-xl ">craetive_ambition</span>
      </header>

      <Nav title={"Dashboard"} Icon={TbDashboard} />
      <Nav title={"Analytics"} Icon={VscGraphLine} />
      <Nav title={"Message"} Icon={FiMessageSquare} />
      <Nav title={"Followers"} Icon={AiOutlineUsergroupAdd} />

      <div className=" relative my-0 mx-auto h-[1px] w-4/5  bg-white/[0.438]"></div>

      <Nav title={"Notification"} Icon={MdOutlineNotificationsActive} />
      <Nav title={"Following"} Icon={RiAccountCircleLine} />
      <Nav title={"Earning "} Icon={AiOutlineDollarCircle} />
      <Nav title={"Post"} Icon={TbFileUpload} />
      <Nav title={"Message Request"} Icon={BiMessageAltAdd} />
      <Nav title={" Change Account"} Icon={AiOutlineUserSwitch} />

      <div className=" relative my-0 mx-auto h-[1px] w-4/5  bg-white/[0.438]"></div>

      <Nav title={" Change Theme"} Icon={MdSwapHoriz} />
      <Nav title={"More details"} Icon={BiDotsHorizontalRounded} />

      <svg
        className="absolute l-0 x-[-1] opacity-30"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: "#ffffff", width: "100%", height: 500 }}
      >
        <path
          d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
          opacity=".25"
        />
        <path
          d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
          opacity=".5"
        />
        <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
      </svg>
    </div>
  );
};

export default Navbar;

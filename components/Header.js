"use client";
import data from "../data/header";
import Image from "next/image";
import React from "react";
import { BsFillTerminalFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import Headerinfo from "./Headerinfo";
import { IoMdSchool } from "react-icons/io";

const Header = () => {
  const { image, name, jobTitle, experiance, education, address } = data;
  return (
    <div className="flex flex-wrap md:flex-row flex-col items-center gap-y-9 gap-x-8 pb-7">
      <div className="w-[200px] md:w-[150px] h-[200px] md:h-[150px] relative rounded-full overflow-hidden">
        <Image
          src={image}
          fill
          alt="profile image"
          className="w-full h-full object-cover hover:scale-125 transition-all duration-500"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-black capitalize text-violet-700 dark:text-white">
          {name}
        </h1>
        <h3 className="mt-2 text-xl font-semibold md:font-bold capitalize dark:text-zinc-400">
          {jobTitle}
        </h3>
        <div className="flex flex-wrap items-center gap-y-1 gap-x-4 mt-2">
          <Headerinfo
            Icon={
              <FaMapMarkerAlt
                className="text-violet-700 dark:text-zinc-400"
                size={16}
              />
            }
            title={address}
          />
          <Headerinfo
            Icon={
              <BsFillTerminalFill
                className="text-violet-700 dark:text-zinc-400"
                size={16}
              />
            }
            title={experiance}
          />
          <Headerinfo
            Icon={
              <IoMdSchool
                className="text-violet-700 dark:text-zinc-400"
                size={16}
              />
            }
            title={education}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

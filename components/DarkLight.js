'use client'
import { FaCloudMoon } from "react-icons/fa";
import React from 'react'
import { useTheme } from "next-themes";
import classNames from "classnames";
import { LuSunMoon } from "react-icons/lu";

const DarkLight = () => {
  const {theme, setTheme} = useTheme()
  return (
    <div onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} 
    className="fixed top-4 right-4 w-12 h-[18px] rounded-full bg-violet-300 flex items-center">

      <span className={classNames("w-7 h-7 flex item-center justify-center bg-violet-700 rounded-full transition-all duration-400", {
        'ml-5': theme === 'dark'
      })}>
        {theme === 'light' ? <FaCloudMoon className="text-white" size={15}/> : <LuSunMoon className="text-white" size={14}/> }
    
     </span>
    </div>
  )
}

export default DarkLight
 
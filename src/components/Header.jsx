import { useContext, useEffect } from "react";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";

import logo from "../assets/images/logo.png";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {}, []);

  return (
    <div className="flex items-center p-3">
      <img src={logo} alt="logo" width={60} height={60} />
      <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full">
        <HiOutlineMagnifyingGlass />
        <input
          className="bg-transparent outline-none px-2"
          type="text"
          placeholder="Search Games"
        />
      </div>
      <div>
        {theme === "light" ? (
          <HiMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full curson-pointer"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;

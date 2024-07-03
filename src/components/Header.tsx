import { AiFillMoon, AiFillSun } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useTheme } from "./ThemeContext";

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <header className="border-1 fixed z-10 flex w-full items-center justify-between border-b border-gray-200 bg-gray-50 px-3 py-[16px] sm:static sm:w-full sm:border-none dark:border-gray-500 dark:bg-slate-800 dark:text-white">
      <div className="grid grid-flow-col gap-1 sm:gap-2">
        {[
          ["Home", "/"],
          ["Experience", "/experience"],
          ["Projects", "/projects"],
          ["More", "/more"],
        ].map(([title, url]) => {
          return (
            <NavLink
              key={title}
              to={url}
              className={({ isActive }) =>
                `inline-block rounded-lg border border-solid border-gray-300 px-1 py-[4px] text-center text-gray-900 sm:py-[8px] sm:hover:border-green sm:hover:text-green ${isActive ? "border-green text-green dark:border-gray-600 dark:text-white" : ""} md:px-2 dark:border-gray-600 dark:text-gray-400 dark:hover:border-gray-400 dark:hover:text-white`
              }
            >
              {title}
            </NavLink>
          );
        })}
      </div>

      <div
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-green shadow-yellow-500 dark:border-gray-400 dark:bg-gray-800"
        onClick={toggleDarkMode}
      >
        {!darkMode && (
          <AiFillSun style={{ fontSize: "26px", color: "#FFD700" }} />
        )}
        {darkMode && (
          <AiFillMoon style={{ fontSize: "26px", color: "#FFD700" }} />
        )}
      </div>
    </header>
  );
};

export default Header;

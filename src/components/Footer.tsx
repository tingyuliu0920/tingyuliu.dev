import { useTheme } from "./ThemeContext";

const Footer = () => {
  const { darkMode } = useTheme();
  let icon = darkMode ? "/icon-white.svg" : "/icon.svg";
  return (
    <footer className="sm: flex items-center justify-center border-t border-gray-200 px-3 py-[8px] sm:border-none sm:py-[24px] dark:border-gray-500">
      <img src={icon} alt="" className="mr-2 inline-block w-6" />
      <span className="pr-3">©Anne 2024</span>
    </footer>
  );
};

export default Footer;

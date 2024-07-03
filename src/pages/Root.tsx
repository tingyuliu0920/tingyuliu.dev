import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "../components/ThemeContext";

const Root = () => {
  return (
    <ThemeProvider>
      <div className="bg-gray-50 dark:bg-slate-800 dark:text-gray-200">
        <div className="mx-auto flex min-h-screen w-full flex-col sm:w-5/6 sm:max-w-3xl sm:px-0">
          <Header />
          <div className="flex-1 px-4 pb-[20px] pt-[74px] sm:pt-[10px]">
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Root;

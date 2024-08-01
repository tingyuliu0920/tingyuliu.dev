import { useTheme } from "../components/ThemeContext";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const handleGoBack = () => {
    navigate("/");
  };
  const bgClass = darkMode
    ? "dark:bg-slate-800 dark:text-gray-200"
    : "bg-gray-50";
  return (
    <div
      className={`flex h-screen w-screen flex-col items-center justify-center ${bgClass}`}
    >
      <Helmet title="P404 | Tingyu Liu"></Helmet>
      <p className="text-3xl font-bold text-gray-500">404</p>
      <p className="mt-2">The page you were looking for could not be found.</p>
      <button
        onClick={handleGoBack}
        className="mt-6 rounded border-[1px] border-green px-4 py-2"
      >
        Back to Homepage
      </button>
    </div>
  );
};

export default Error;

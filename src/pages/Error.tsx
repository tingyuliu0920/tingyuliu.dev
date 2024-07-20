import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Helmet title="P404 | Tingyu Liu"></Helmet>
      <div className="text-5xl">😢</div>
      <p className="mt-2">The page you were looking for could not be found.</p>
      <button
        onClick={handleGoBack}
        className="mt-6 rounded bg-green px-4 py-2 text-white"
      >
        Go Back to Homepage
      </button>
    </div>
  );
};

export default Error;

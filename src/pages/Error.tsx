import { useDocumentTitle } from "../router";

const Error = () => {
  useDocumentTitle("404 | Tingyu Liu");
  return (
    <div className="mt-[50px] flex flex-col items-center justify-center px-10">
      <div className="text-6xl">😢</div>
      <p className="mt-2 text-lg">
        The page you were looking for could not be found.
      </p>
    </div>
  );
};

export default Error;

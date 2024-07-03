import { RouteObject, useLocation } from "react-router-dom";
import Root from "./pages/Root";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import More from "./pages/More";
import Home from "./pages/Home";
import Photography from "./pages/Photography";
import Error from "./pages/Error";
import { useEffect } from "react";

export const useDocumentTitle = (title: string) => {
  const location = useLocation();
  useEffect(() => {
    document.title = title;
  }, [location, title]);
};
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/more",
        element: <More />,
      },
      {
        path: "/photography",
        element: <Photography />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
];

export default routes;

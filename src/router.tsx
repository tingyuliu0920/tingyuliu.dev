import { RouteObject } from "react-router-dom";
import Root from "./pages/Root";
import Projects from "./pages/Projects";
import More from "./pages/More";
import Home from "./pages/Home";
import Photography from "./pages/Photography";
import Error from "./pages/Error";

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
        path: "/more",
        element: <More />,
      },
      {
        path: "/photography",
        element: <Photography />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
];

export default routes;

import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import routes from "./router";

const router = createHashRouter(routes);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />,
);

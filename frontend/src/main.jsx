import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Products from "./pages/Products";
import Shop from "./pages/Shop";
import Survey from "./components/Survey";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "survey",
        element: <Survey />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

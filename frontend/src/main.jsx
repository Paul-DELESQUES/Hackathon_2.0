import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Products from "./pages/Products";
import Shop from "./pages/Shop";
import Survey from "./components/Survey";
import Error from "./pages/Error";
import DetailsProduct from "./pages/DetailsProduct";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/products",
        element: <Products />,
        errorElement: <Error />,
      },
      {
        path: "/products/:id",
        element: <DetailsProduct />,
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

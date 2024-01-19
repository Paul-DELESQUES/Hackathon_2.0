import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Products from "./pages/Products";
import Shop from "./pages/Shop";
import ImgModal from "./components/canvas/Modal";
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
        path: "produits",
        element: <Products />,
        errorElement: <Error />,
      },
      {
        path: "produits/:id",
        element: <DetailsProduct />,
      },
      {
        path: "sondage",
        element: <Survey />,
      },
      {
        path: "tablette",
        element: <ImgModal />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
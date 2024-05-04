import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import BiquinisPage from "./pages/BiquinisPage";
import TopsPage from "./pages/TopsPage";
import SaiasPage from "./pages/SaiasPage";
import ProdutosDetalhes from "./pages/ProdutosDetalhes.jsx";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "biquinis",
        element: <BiquinisPage />,
      },
      {
        path: "tops",
        element: <TopsPage />,
      },
      {
        path: "saias",
        element: <SaiasPage />,
      },
      {
        path: "/produto/:id",
        element: <ProdutosDetalhes />,
      },
      {
        path: "login",
        element: <Login />,
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
reportWebVitals();

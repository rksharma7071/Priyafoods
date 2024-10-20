import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Theme from "./components/Theme.jsx";
import FestiveSale from "./components/FestiveSale.jsx";
import Pickles from "./components/Pickles.jsx";
import CollectionAll from "./components/CollectionAll.jsx";
import Masalas from "./components/Masalas.jsx";
import Spices from "./components/Spices.jsx";
import Blogs from "./components/Blogs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Theme />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/collections/all",
        element: <CollectionAll />,
      },
      {
        path: "/collections/festive-sale",
        element: <FestiveSale />,
      },
      {
        path: "/collections/pickles",
        element: <Pickles />,
      },
      {
        path: "/collections/masalas",
        element: <Masalas />,
      },
      {
        path: "/collections/spices",
        element: <Spices />,
      },
      {
        path: "/blogs/news",
        element: <Blogs />,
      },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);

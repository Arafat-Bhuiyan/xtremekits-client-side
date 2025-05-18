import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { AddEquipment } from "./components/AddEquipment";
import { AllSportsEquipment } from "./components/AllSportsEquipment";
import { MyEquipmentList } from "./components/MyEquipmentList";
import { UpdateItem } from "./components/UpdateItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const res = await fetch("http://localhost:5000/item");
          return res.json();
        },
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/add-equipment",
        element: <AddEquipment />,
      },
      {
        path: "/all-sports-equipment",
        element: <AllSportsEquipment />,
        loader: async () => {
          const res = await fetch("http://localhost:5000/all-item");
          return res.json();
        },
      },
      {
        path: "/my-equipment",
        element: <MyEquipmentList />,
      },
      {
        path: "/updateItem/:id",
        element: <UpdateItem />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/item/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

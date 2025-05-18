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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const res = await fetch("http://localhost:5000/item");
          return res.json();
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-equipment",
        element: <AddEquipment></AddEquipment>,
      },
      {
        path: "/all-sports-equipment",
        element: <AllSportsEquipment></AllSportsEquipment>,
        loader: async () => {
          const res = await fetch("http://localhost:5000/all-item");
          return res.json();
        },
      },
      {
        path: "/my-equipment",
        element: <MyEquipmentList></MyEquipmentList>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

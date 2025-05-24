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
import { ViewItem } from "./components/ViewItem";
import { AuthProvider } from "./providers/AuthProvider";
import { PrivateRoute } from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // Public Routes
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
        path: "/all-sports-equipment",
        element: <AllSportsEquipment />,
        loader: async () => {
          const res = await fetch("http://localhost:5000/all-item");
          return res.json();
        },
      },

      // Private Routes
      {
        path: "/add-equipment",
        element: (
          <PrivateRoute>
            <AddEquipment />
          </PrivateRoute>
        ),
      },
      {
        path: "/items/:id",
        element: (
          <PrivateRoute>
            <ViewItem />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/item/${params.id}`),
      },
      {
        path: "/my-equipment",
        element: (
          <PrivateRoute>
            <MyEquipmentList />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-item/:id",
        element: (
          <PrivateRoute>
            <UpdateItem />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/item/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

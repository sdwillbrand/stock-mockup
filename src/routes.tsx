import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import { action as loginAction } from "./pages/Login/action";
import Dashboard from "./pages/Dashboard";
import Stocks from "./pages/Stocks";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    action: loginAction,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/stocks",
    element: <Stocks />,
  },
]);

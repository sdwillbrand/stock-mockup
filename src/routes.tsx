import { createBrowserRouter } from "react-router-dom";
import App from "./pages";
import Login from "./pages/Login";
import { action as loginAction } from "./pages/Login/action";
import Dashboard from "./pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
    action: loginAction,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Action from "../components/Action";
import PrivateRoute from "../components/PrivateRoute";
import Profile from "../components/Profile";
import PublicRoute from "../components/PublicRoute";
import SendEmailVerificationLink from "../components/SendEmailVerificationLink";
import SendResetPasswordLink from "../components/SendResetPasswordLink";
import Main from "../layouts/Main";
import GetStarted from "../pages/GetStarted";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/:authName",
        element: (
          <PublicRoute>
            <GetStarted />
          </PublicRoute>
        ),
      },
      {
        path: "/verify-email",
        element: (
          <PrivateRoute>
            <SendEmailVerificationLink />
          </PrivateRoute>
        ),
      },
      {
        path: "/reset-email",
        element: (
          <PublicRoute>
            <SendResetPasswordLink />
          </PublicRoute>
        ),
      },
      {
        path: "/action",
        element: <Action />,
      },
      {
        path: "/contact",
        element: <div>Contact us</div>,
      },
      {
        path: "/about",
        element: <div>About us</div>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

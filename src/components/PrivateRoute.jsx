import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import LoadingPage from "./LoadingPage";

export default function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  //   if (!user) return <Navigate to={"/auth/signin"}></Navigate>;
  if (loading) {
    return <LoadingPage />;
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/auth/signin"}></Navigate>;
}

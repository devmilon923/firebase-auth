import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function PublicRoute({ children }) {
  const { loading, user } = useContext(AuthContext);
  const navigate = useNavigate();
  //   alert(loading);

  if (user) {
    return navigate("/");
  } else {
    return children;
  }
}

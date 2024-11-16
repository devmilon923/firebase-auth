import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

export default function GetStarted() {
  const navigate = useNavigate();
  const { authName } = useParams();
  useEffect(() => {
    if (authName !== "signup" && authName !== "signin") {
      navigate("/auth/signin");
    }
  }, [authName, navigate]);
  if (authName === "signup") {
    return <Signup />;
  } else if (authName === "signin") {
    return <Signin />;
  }
}

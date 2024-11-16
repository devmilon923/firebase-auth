import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import SetNewPassword from "./SetNewPassword";

export default function Action() {
  const { oobCodeCheck, confrimEmailVerification, loading } =
    useContext(AuthContext);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const oobCode = searchParams.get("oobCode");
  const [operation, setOperation] = useState(false);

  useEffect(() => {
    if (loading) return;

    const actionControl = async () => {
      try {
        const codeInfo = await oobCodeCheck(oobCode);
        if (codeInfo.operation === "PASSWORD_RESET") {
          setOperation(true);
        } else if (codeInfo.operation === "VERIFY_EMAIL") {
          await confrimEmailVerification(oobCode);
          toast.success("Email verified");
          setOperation(false);
          return navigate("/");
        } else {
          toast.error("Unknown operation");
          return setOperation(false);
        }
      } catch (err) {
        toast.error("Verification expired");
        setOperation(false);
        return navigate("/auth/signin");
      }
    };

    actionControl();
  }, [oobCode, loading, oobCodeCheck, confrimEmailVerification, navigate]);

  if (loading) return <div>Loading...</div>;

  if (operation) {
    return <SetNewPassword oobCode={oobCode} />;
  }

  return null;
}

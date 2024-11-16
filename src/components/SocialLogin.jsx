import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
export default function SocialLogin() {
  const { googleLogin, facebookLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast.success("Login successfull");
      return navigate("/");
    } catch (error) {
      console.log(error.message);
      return toast.error("Login failed");
    }
  };
  const handleFacebookLogin = async () => {
    try {
      await facebookLogin();
      toast.success("Login successfull");
      return navigate("/");
    } catch (error) {
      console.log(error.message);
      return toast.error("Login failed");
    }
  };
  return (
    <div>
      <div className="mt-4 space-y-3">
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded-md hover:bg-red-700 transition duration-200"
        >
          <FaGoogle className="mr-2" />
          Continue with Google
        </button>
        <button
          onClick={handleFacebookLogin}
          className="w-full flex items-center justify-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          <FaFacebook className="mr-2" />
          Continue with Facebook
        </button>
      </div>
    </div>
  );
}

import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import SocialLogin from "./SocialLogin";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loginUser } = useContext(AuthContext);
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await loginUser(email, password);
      toast.success("Login successfull");
    } catch (error) {
      console.log(error.message);
      toast.error("Login failed");
    }
  };
  return (
    <div className="flex justify-center items-center lg:mb-28 lg:mt-20 ">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Signin an account
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6 relative">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-9 text-sm text-gray-600"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="flex justify-between items-center mb-6">
            <NavLink
              to={"/reset-email"}
              className="text-sm text-indigo-600 hover:underline"
            >
              Forgot password?
            </NavLink>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
          >
            Login
          </button>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <NavLink
                to={"/auth/signup"}
                href="#"
                className="text-indigo-600 hover:underline"
              >
                Sign up
              </NavLink>
            </p>
          </div>
        </form>
        <div className="divider">OR</div>
        <SocialLogin />
      </div>
    </div>
  );
};

export default Signin;

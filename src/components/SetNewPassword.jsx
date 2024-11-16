import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function SetNewPassword({ oobCode }) {
  const [showPassword, setShowPassword] = useState(false);
  const { setNewPassword } = useContext(AuthContext);
  const nagivate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const handleNewPassword = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const cpassword = e.target.cpassword.value;
    if (password !== cpassword) return toast.error("Password not match");
    try {
      await setNewPassword(oobCode, cpassword);
      toast.success("Password change successfully");
      return nagivate("/");
    } catch (error) {
      console.log(error.message);
      toast.error("Link expire try again!");
      return nagivate("/reset-email");
    }
  };
  return (
    <div>
      <div className="flex justify-center items-center lg:my-28 ">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            Set New Password
          </h2>
          <form onSubmit={handleNewPassword}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                New Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
                placeholder="Password"
              />
            </div>
            <div className="mb-6 relative">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="cpassword"
              >
                Confrim Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="cpassword"
                name="cpassword"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
                placeholder="Confrim"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-9 text-sm text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
            >
              Change Password
            </button>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Need Help?{" "}
                <NavLink
                  to={"/auth/signup"}
                  href="#"
                  className="text-indigo-600 hover:underline"
                >
                  Contact us
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function SendEmailVerificationLink() {
  const { user, sendVerificationEmail, loading } = useContext(AuthContext);

  if (user.emailVerified) return <Navigate to={"/"}></Navigate>;

  const navigator = useNavigate();
  const [status, setStatus] = useState(user.emailVerified);

  const sendEmailLink = (e) => {
    e.preventDefault();
    console.log(status);
    document.getElementById("btn").disabled = true;
    document.getElementById("btn").style.backgroundColor = "gray";
    if (status === false) {
      sendVerificationEmail()
        .then(() => {
          toast.success("Verification email sended!");
        })
        .catch((err) => toast.error(err.message));
    } else if (status === true) {
      setStatus(true);
      toast.success("Email already verifyed");
      return navigator("/");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center lg:my-28 ">
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">Verify Email</h2>
          <form onSubmit={sendEmailLink}>
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
                disabled
                value={user?.email}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
                placeholder="Enter your email"
              />
            </div>

            <button
              id="btn"
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-200"
            >
              Send Email
            </button>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Need help?{" "}
                <NavLink
                  to={"/auth/signup"}
                  href="#"
                  className="text-indigo-600 hover:underline"
                >
                  Contact Us
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

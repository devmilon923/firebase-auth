import { useContext } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout()
      .then(() => {
        navigate("/auth/signin");
        toast.success("Logout success");
      })
      .catch((err) => toast.error(err.message));
  };
  const links = (
    <>
      {user && (
        <li>
          <NavLink to={"/"}>Dashboard</NavLink>
        </li>
      )}
      <li>
        <NavLink to={"/about"}>About us</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact us</NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed w-full top-0 z-30 py-2 bg-white">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn pl-0 btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className=" text-xl font-semibold">ReactLearn</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to={"/profile"} className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </NavLink>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink
              to={"/auth/signup"}
              className="btn btn-sm text-xs rounded-sm text-white hover:bg-teal-500 bg-yellow-500"
            >
              Get Started
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}

// <div className="navbar bg-base-100">
//   <div className="flex-1">
//     <a className="btn btn-ghost text-xl">daisyUI</a>
//   </div>
//   <div className="flex-none gap-2">
//     <div className="form-control">
//       <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
//     </div>
//     <div className="dropdown dropdown-end">
//       <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//         <div className="w-10 rounded-full">
//           <img
//             alt="Tailwind CSS Navbar component"
//             src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
//         </div>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//         <li>
//           <a className="justify-between">
//             Profile
//             <span className="badge">New</span>
//           </a>
//         </li>
//         <li><a>Settings</a></li>
//         <li><a>Logout</a></li>
//       </ul>
//     </div>
//   </div>
// </div>

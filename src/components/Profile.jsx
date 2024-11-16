import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import UpdateProfile from "./UpdateProfile";

export default function Profile() {
  const { user, auth } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState(user);
  useEffect(() => {
    setCurrentUser(auth.currentUser);
  }, [currentUser]);
  return (
    <section>
      <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="relative bg-gradient-to-r from-pink-500 to-yellow-500 h-32">
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
            <img
              className="h-24 w-24 rounded-full object-cover border-4 border-white"
              src={currentUser?.photoURL}
              alt="Profile"
            />
          </div>
        </div>
        <div className="pt-16 pb-8 px-6">
          <div className="text-center">
            <h1 className="text-lg font-semibold">{currentUser.displayName}</h1>
            <p className="text-sm text-gray-500">{currentUser.email}</p>
            <div className="mt-4 flex justify-center space-x-3">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-behance"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            <p className="mt-4 text-gray-600 text-sm">
              Brand and communication strategy, graphic design, illustration,
              art direction and portrait photography.
            </p>
            <p className="mt-2 text-gray-500 text-xs">Creative at Superbloss</p>
          </div>
        </div>
      </div>
      {/* <div className="divider"></div> */}
      <div className="mt-12 pb-16">
        <UpdateProfile
          setCurrentUser={setCurrentUser}
          currentUser={currentUser}
        />
      </div>
    </section>
  );
}

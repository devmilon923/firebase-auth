import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../contexts/AuthContext";

export default function UpdateProfile({ setCurrentUser }) {
  const { profileUpdate, user, auth } = useContext(AuthContext);

  const [btnLoading, setBtnLoading] = useState(false);
  const handleUpdate = async (e) => {
    setBtnLoading(auth.currentUser);

    e.preventDefault();

    const image = e.target.profilePhoto.files;
    const name = e.target.name.value;

    if (image.length === 1) {
      const data = new FormData();
      data.append("file", image[0]);
      data.append("upload_preset", "review-auth");
      data.append("cloud_name", "dx4fulda0");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dx4fulda0/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const photourl = await response.json();
      try {
        const obj = {
          displayName: name,
          photoURL: photourl.url,
        };
        await profileUpdate(obj);
        setBtnLoading(false);

        setCurrentUser(true);
        toast.success("Profile updated");
        e.target.reset();
      } catch (error) {
        setBtnLoading(false);

        console.log(error.message);
        toast.error("Profile not updated");
      }
    } else if (image.length == 0) {
      if (user?.displayName === name) {
        toast.success("Everything was uptodate");
        return setBtnLoading(false);
      }
      try {
        const obj = {
          displayName: name,
        };
        await profileUpdate(obj);
        setBtnLoading(false);

        setCurrentUser(true);
        setBtnLoading(true);
        toast.success("Profile updated");
      } catch (error) {
        setBtnLoading(false);
        console.log(error.message);
        toast.error("Profile not updated");
      }
    } else {
      setBtnLoading(false);

      return toast.error("Somthing was worng with image");
    }
  };
  return (
    <div>
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Update Profile
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              defaultValue={user?.displayName}
              //   value={user?.displayName}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="profilePhoto"
              className="block text-sm font-medium text-gray-700"
            >
              Profile Photo:
            </label>
            <input
              type="file"
              id="profilePhoto"
              name="profilePhoto"
              accept="image/*"
              className="mt-1 file-input file-input-bordered file-input-sm block w-full text-sm text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <img
              src="#"
              alt="Profile Preview"
              className="w-24 h-24 rounded-full mx-auto mt-2 hidden"
              id="photoPreview"
            />
          </div>
          <button
            type="submit"
            className="w-full justify-center flex items-center py-2 px-4 bg-neutral text-white font-semibold rounded-md hover:bg-blue-900 focus:bg-blue-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            {btnLoading && (
              <svg
                width="18"
                height="18"
                fill="currentColor"
                className="mr-2 animate-spin"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
              </svg>
            )}
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

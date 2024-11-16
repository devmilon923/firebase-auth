import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Main() {
  return (
    <div className="bg-gray-50">
      <Toaster position="top-right" reverseOrder={false}></Toaster>
      <Navbar></Navbar>
      <div className="container mx-auto px-2  pt-24 min-h-[calc(100vh-68px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

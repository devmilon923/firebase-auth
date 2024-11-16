import React from "react";

export default function LoadingPage() {
  return (
    <div className="h-screen overflow-hidden z-50 flex justify-center items-center">
      <span className="loading loading-bars w-12"></span>
    </div>
  );
}

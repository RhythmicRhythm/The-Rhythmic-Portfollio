import { useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";
import ProjectInfo from "./pages/ProjectInfo";

function App() {
  return (
    <>
      <div className=" mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<ProjectInfo />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;

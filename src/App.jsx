import { useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";
import Token from "./pages/Token";

function App() {
  return (
    <>
      <div className=" mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/token" element={<Token />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;

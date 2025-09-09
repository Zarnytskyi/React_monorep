import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

export default function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/profile"
        element={token ? <Profile /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

import React from "react";
import Quote from "./components/Quote";

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        🎯 Случайная цитата
      </h1>
      <Quote />
    </div>
  );
}

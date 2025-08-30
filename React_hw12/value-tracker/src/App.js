import React, { useState } from "react";
import ValueDisplay from "./ValueDisplay";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <h1>Текущее и предыдущее значение</h1>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Введите текст..."
      />
      <ValueDisplay value={value} />
    </div>
  );
}

export default App;
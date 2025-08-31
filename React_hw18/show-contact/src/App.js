import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Contacts from "./components/contact/Contact";

function Home() {
  const navigate = useNavigate();

  const goToContacts = () => {
    navigate("/contacts");
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Главная страница</h1>
      <button
        onClick={goToContacts}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
          backgroundColor: "#0078ff",
          color: "#fff",
          border: "none",
        }}
      >
        Перейти в Контакты
      </button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<h1>Страница не найдена</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
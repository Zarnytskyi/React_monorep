import React, { useState } from "react";
import { connect } from "react-redux";
import { setUserInfo } from "./redux/actions";

function UserForm({ setUserInfo }) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !status) {
      alert("Заполните все поля");
      return;
    }
    setUserInfo(name, status);
    setName("");
    setStatus("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Обновить данные пользователя</h2>
      <div>
        <input
          type="text"
          placeholder="Введите имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ margin: "5px", padding: "8px" }}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Введите статус"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ margin: "5px", padding: "8px" }}
        />
      </div>
      <button type="submit" style={{ padding: "10px 15px", marginTop: "10px" }}>
        Сохранить
      </button>
    </form>
  );
}

export default connect(null, { setUserInfo })(UserForm);

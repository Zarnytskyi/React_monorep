import React from "react";
import User from "./User";
import UserForm from "./UserForm";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Управление пользователем</h1>
      <User />
      <UserForm />
    </div>
  );
}

export default App;

import React from "react";
import Filter from "./components/Filter";
import UserList from "./components/UserList";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Список пользователей</h1>
      <Filter />
      <UserList />
    </div>
  );
}

export default App;

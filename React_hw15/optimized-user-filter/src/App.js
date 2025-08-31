import React, { useState, useCallback, useMemo } from "react";
import UserList from "./components/UserList";

function App() {
  const [filter, setFilter] = useState("");

  // Исходный список пользователей
  const userList = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Eva" }
  ];

  // Мемоизация функции фильтрации
  const filterUsers = useCallback(
    (filterText) => {
      return userList.filter(user =>
        user.name.toLowerCase().includes(filterText.toLowerCase())
      );
    },
    [userList]
  );

  // Мемоизация отфильтрованного списка
  const filteredUsers = useMemo(() => {
    return filterUsers(filter);
  }, [filter, filterUsers]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Фильтр пользователей (оптимизировано)</h1>
      <input
        type="text"
        placeholder="Введите имя..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", marginBottom: "20px" }}
      />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import UserList from './components/UserList';
import { useDispatch } from 'react-redux';
import { addUser } from './features/userSlice';

function App() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (name.trim()) {
      dispatch(addUser(name));
      setName('');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Redux Toolkit Example</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter user name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>Add User</button>
      <UserList />
    </div>
  );
}

export default App;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../features/userSlice';

function UserList() {
  const users = useSelector(state => state.users.list);
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index} style={{ marginBottom: '5px' }}>
            {user}
            <button
              style={{ marginLeft: '10px' }}
              onClick={() => dispatch(removeUser(user))}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: ['Alice', 'Bob', 'Charlie']
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.list.push(action.payload);
    },
    removeUser: (state, action) => {
      state.list = state.list.filter(user => user !== action.payload);
    }
  }
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

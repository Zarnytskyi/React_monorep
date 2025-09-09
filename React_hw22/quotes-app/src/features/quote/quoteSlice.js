import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// асинхронный thunk для получения цитаты
export const fetchQuote = createAsyncThunk(
  "quote/fetchQuote",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://dummyjson.com/quotes/random");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    text: "",
    author: "",
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.text = action.payload.quote;
        state.author = action.payload.author;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default quoteSlice.reducer;

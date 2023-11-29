import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getGreetings = createAsyncThunk(
  'greetings/getGreetings',
  async () => {
    const response = await fetch('/api/v1/random/random_greeting');
    const data = await response.json();
    return data.greeting;
  }
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: {
    greeting: null,
    status: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGreetings.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getGreetings.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.greeting = action.payload;
      })
      .addCase(getGreetings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default greetingsSlice.reducer;

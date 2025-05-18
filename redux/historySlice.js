import { createSlice } from '@reduxjs/toolkit';

const historySlice = createSlice({
  name: 'history',
  initialState: [],
  reducers: {
    addToHistory: (state, action) => {
      const updated = [action.payload, ...state.filter(item => item !== action.payload)];
      return updated.slice(0, 10); // sadece son 10 başlık
    },
  },
});

export const { addToHistory } = historySlice.actions;
export default historySlice.reducer;

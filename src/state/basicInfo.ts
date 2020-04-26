import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import { RootState } from './store';

const basicInfoSlice = createSlice({
  name: 'basicInfo',
  initialState: initialState.character.basicInfo,
  reducers: {
    setArchetype: (state, action) => {
      state.archetype = action.payload;
    },
  },
});

export const { setArchetype } = basicInfoSlice.actions;

export const selectArchetype = (state: RootState) =>
  state.character.basicInfo.archetype;

export default basicInfoSlice.reducer;

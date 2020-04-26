import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';
import { RootState } from './store';

// TODO: rename to setArchetype
const basicInfoSlice = createSlice({
  name: 'basicInfo',
  initialState: initialState.character.basicInfo,
  reducers: {
    updateArchetype: (state, action) => {
      state.archetype = action.payload;
    },
  },
});

export const { updateArchetype } = basicInfoSlice.actions;

export const selectArchetype = (state: RootState) =>
  state.character.basicInfo.archetype;

export default basicInfoSlice.reducer;

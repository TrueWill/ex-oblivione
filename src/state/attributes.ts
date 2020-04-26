// TODO working
// category - physical, etc.
// primary, secondary priority
// name - Strength etc.
// dots (start at 1)
// specialty

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialState from './initialState';

export interface AttributeCategoryPriority {
  category: keyof typeof initialState.character.attributes;
  priority: number;
}

const attributesSlice = createSlice({
  name: 'attributes',
  initialState: initialState.character.attributes,
  reducers: {
    setPriority(state, action: PayloadAction<AttributeCategoryPriority>) {
      const { category, priority } = action.payload;
      const previousPriority = state[category].priority;

      if (priority === previousPriority) {
        return;
      }

      // IE doesn't support Array.prototype.find.
      const otherCategoryWithNewPriority = (Object.keys(state) as Array<
        keyof typeof state
      >).filter((key) => state[key].priority === priority)[0];

      if (otherCategoryWithNewPriority) {
        // Swap priorities
        state[otherCategoryWithNewPriority].priority = previousPriority;
      }

      state[category].priority = priority;
    },
  },
});

export const { setPriority } = attributesSlice.actions;

export default attributesSlice.reducer;

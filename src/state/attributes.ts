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

type AttributeTrait =
  | {
      category: 'physical';
      trait: keyof typeof initialState.character.attributes.physical.traits;
    }
  | {
      category: 'social';
      trait: keyof typeof initialState.character.attributes.social.traits;
    }
  | {
      category: 'mental';
      trait: keyof typeof initialState.character.attributes.mental.traits;
    };

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
    addDot(state, action: PayloadAction<AttributeTrait>) {
      const { category, trait } = action.payload;

      // TODO: Figure out how to type this
      (state[category].traits as any)[trait].dots++;
    },
    removeDot(state, action: PayloadAction<AttributeTrait>) {
      const { category, trait } = action.payload;

      // TODO: Figure out how to type this
      const traitObject = (state[category].traits as any)[trait];

      if (traitObject.dots > 1) {
        traitObject.dots--;
      }
    },
  },
});

export const { setPriority, addDot, removeDot } = attributesSlice.actions;

export default attributesSlice.reducer;

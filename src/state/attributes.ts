import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialState from './initialState';
import {
  minimumTraitRatingForSpecialty,
  standardMaxDots,
} from '../constants/characterOptions';
import { RootState } from './store';

export interface AttributeCategoryPriority {
  category: keyof typeof initialState.character.attributes;
  priority: number;
}

export type AttributeTrait =
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

export type AttributeTraitSpecialty = AttributeTrait & { specialty?: string };

// See https://stackoverflow.com/a/61450491/161457
type Traits = Record<
  AttributeTrait['trait'],
  typeof initialState.character.attributes.physical.traits.strength & {
    specialty?: string;
  }
>;

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

      const traitObject = (state[category].traits as Traits)[trait];

      if (traitObject.rating < standardMaxDots) {
        traitObject.rating++;
      }
    },
    removeDot(state, action: PayloadAction<AttributeTrait>) {
      const { category, trait } = action.payload;

      const traitObject = (state[category].traits as Traits)[trait];

      if (traitObject.rating > 1) {
        traitObject.rating--;
      }
    },
    setSpecialty(state, action: PayloadAction<AttributeTraitSpecialty>) {
      const { category, trait, specialty } = action.payload;

      const traitObject = (state[category].traits as Traits)[trait];

      if (traitObject.rating >= minimumTraitRatingForSpecialty) {
        traitObject.specialty = specialty;
      }
    },
  },
});

export const {
  setPriority,
  addDot,
  removeDot,
  setSpecialty,
} = attributesSlice.actions;

export const selectAttributes = (state: RootState) =>
  state.character.attributes;

export default attributesSlice.reducer;

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import basicInfo from './basicInfo';
import attributes from './attributes';

const rootReducer = combineReducers({
  character: combineReducers({
    basicInfo,
    attributes,
  }),
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;

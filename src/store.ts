import { configureStore, combineReducers } from '@reduxjs/toolkit';
import basicInfo from './basicInfo';

const rootReducer = combineReducers({
  character: combineReducers({
    basicInfo,
  }),
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;

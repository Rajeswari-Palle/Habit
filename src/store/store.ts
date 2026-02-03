import { configureStore } from "@reduxjs/toolkit";
import reducer from "./habitSlice.ts";
import habitsReducer from "./habitSlice.ts";
const store = configureStore({
  reducer: {
    habits: habitsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

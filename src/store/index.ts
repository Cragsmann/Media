import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

// Define RootState type for useSelector hook
export type RootState = ReturnType<typeof store.getState>;

// Create typed useDispatch hook
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

// Create typed useSelector hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
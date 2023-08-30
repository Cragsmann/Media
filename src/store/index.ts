import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { User } from "./slices/usersSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface APIResponse {
  users: User[];
  albums: any[]; // You should replace 'any[]' with the actual type of album data
  photos: any[]; // You should replace 'any[]' with the actual type of photo data
}

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

// export const fetchUsers = createAsyncThunk("users/fetch", async () => {
//   const response = await axios.get("http://localhost:3005/users");
//   // console.log(response.data);
//   return response.data;
// });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";

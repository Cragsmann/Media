import { createSlice, Slice, SliceCaseReducers } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { removeUser } from "../thunks/removeUser";
export interface User {
  id: number;
  name: string;
}

export interface UsersState {
  data: User[];
  isLoading: boolean;
  error: null | string;
}

const initialState: UsersState = {
  data: [],
  isLoading: false,
  error: null,
};

const usersSlice: Slice<
  UsersState,
  SliceCaseReducers<UsersState>
> = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      ///fetch Users--------------------------------------------------
      .addCase(fetchUsers.pending, (state: UsersState) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state: UsersState, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state: UsersState, action) => {
        state.isLoading = false;
        state.error = JSON.stringify(action.error) || "An error occurred";
      })

      ///create User---------------------------------------------------
      .addCase(addUser.pending, (state: UsersState) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state: UsersState, action) => {
        state.isLoading = false;
        state.data.push(action.payload);
      })
      .addCase(addUser.rejected, (state: UsersState, action) => {
        state.isLoading = false;
        state.error = JSON.stringify(action.error) || "An error occurred";
      })

      /// remove User----------------------------------------------------
      .addCase(removeUser.pending, (state: UsersState, action) => {
        state.isLoading = true;
      })
      .addCase(removeUser.fulfilled, (state: UsersState, action) => {
        state.isLoading = false;
        state.data = state.data.filter(
          (user: User) => user.id !== action.payload.id
        );
      })
      .addCase(removeUser.rejected, (state: UsersState, action) => {
        state.isLoading = false;
        state.error = JSON.stringify(action.error) || "An error occurred";
      });
  },
});

export const usersReducer = usersSlice.reducer;

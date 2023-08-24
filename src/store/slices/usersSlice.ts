import {
  createSlice,
  PayloadAction,
  Slice,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";

export interface User {
  id: number;
  name: string;
  // ... other user properties
}

interface UsersState {
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
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "An error occurred";
      });
  },
});

// export const selectUsers = (state: RootState) => state.users.data;
// export const selectUsersLoading = (state: RootState) => state.users.isLoading;
// export const selectUsersError = (state: RootState) => state.users.error;

export const usersReducer = usersSlice.reducer;

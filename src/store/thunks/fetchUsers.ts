import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { User } from "../slices/usersSlice";
import { APIResponse } from "..";

export const fetchUsers = createAsyncThunk<User[], void, {}>(
  "users/fetch",
  async () => {
    const response: AxiosResponse<APIResponse> = await axios.get(
      "http://localhost:3005/users"
    );
    return response.data.users;
  }
);

//AxiosResponse<UsersState>

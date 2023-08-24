import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { User } from "../slices/usersSlice";

export const fetchUsers = createAsyncThunk<User[]>("users/fetch", async () => {
  const response: AxiosResponse<User[]> = await axios.get(
    "http://localhost:3005/users"
  );
  return response.data;
});

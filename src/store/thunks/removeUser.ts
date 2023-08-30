import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { User } from "../slices/usersSlice";

export const removeUser = createAsyncThunk(
  "users/removeUser",
  async (user: User) => {
    const response: AxiosResponse<User[]> = await axios.delete(
      `http://localhost:3005/users/${user.id}`
    );

    return user;
  }
);

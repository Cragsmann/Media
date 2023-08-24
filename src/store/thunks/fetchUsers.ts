import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { User } from "../slices/usersSlice";

//Dev Pause
const pause = (duration: number) => {
  return new Promise((resolve) => setTimeout(resolve, duration));
};

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response: AxiosResponse<User[]> = await axios.get(
    "http://localhost:3005/users"
  );
  // Dev pause
  console.log(response.data);
  await pause(2000);

  return response.data;
});

//: AxiosResponse<User[]>

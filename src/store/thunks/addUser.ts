import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AxiosResponse } from "axios";
import { User } from "../slices/usersSlice";

export const addUser = createAsyncThunk<User, void>(
  "users/addUser",
  async () => {
    const response: AxiosResponse<User> = await axios.post(
      "http://localhost:3005/users",
      {
        name: faker.person.fullName(),
      }
    );
    return response.data;
  }
);

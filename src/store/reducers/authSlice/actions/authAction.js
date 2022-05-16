import { createAsyncThunk } from "@reduxjs/toolkit";

const authAction = createAsyncThunk(
  "auth/auth",
  async ({ firstName, lastName, secondName, email, password }) => {
    
  }
)
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: [],
  isAuth: false,
  isLoading: false
}

const authSlice = createSlice({
  name: "auth",
  initialState,
})
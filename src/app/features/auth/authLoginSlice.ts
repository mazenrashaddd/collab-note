import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthLoginState {
  user: {
    email: string;
    token: string;
  } | null;
}

const initialState: AuthLoginState = {
  user: null,
};

export const AuthLoginSlice = createSlice({
  name: "authLogin",
  initialState,
  reducers: {
    setAuthLogin: (state, action: PayloadAction<AuthLoginState["user"]>) => {
      state.user = action.payload;
    },
    clearAuthLogin: (state) => {
      state.user = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthLogin, clearAuthLogin } = AuthLoginSlice.actions;

export default AuthLoginSlice.reducer;

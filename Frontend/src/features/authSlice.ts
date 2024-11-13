import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    isAuthenticated: boolean;
    isAdmin: boolean;
}
const initialState: AuthState = {
    isAuthenticated: false,
    isAdmin: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginAndLogout: (state, action: PayloadAction<{isAuthenticated: boolean, isAdmin: boolean}>) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.isAdmin = action.payload.isAdmin;     
        },      
    },
});
export const { loginAndLogout} = authSlice.actions;
export default authSlice.reducer;

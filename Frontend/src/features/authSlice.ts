import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Resources} from '../types/type'

interface AuthState {
    isAuthenticated: boolean;
    username : string|null
    currenrMissiles : Resources[] | null
}
const initialState: AuthState = {
    isAuthenticated: false,
    username : null,
    currenrMissiles : null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginAndLogout: (state, action: PayloadAction<{isAuthenticated: boolean, username: string|null}>) => {
            state.isAuthenticated = action.payload.isAuthenticated;
            state.username = action.payload.username;   
        }, 
        setCurrentMissile: (state, action: PayloadAction<Resources[] | null>) => {
            state.currenrMissiles = action.payload;
        },     
    },
});
export const { loginAndLogout, setCurrentMissile} = authSlice.actions;
export default authSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StatusState {
    loding: boolean
    error: string | null
    sucssess: string | null
}

const initialState: StatusState = {
    loding: false,
    error: null,
    sucssess: null
}
const statusSlice = createSlice({
    name: "status",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loding = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        setSuccess: (state, action: PayloadAction<string | null>) => {
            state.sucssess = action.payload;
        },
    },
});
export const { setLoading, setError, setSuccess } = statusSlice.actions;
export default statusSlice.reducer;
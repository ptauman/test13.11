import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Option } from "../types/optionType";
import axios from "axios";
import { setLoading, setError, setSuccess } from "../features/statusSlice";
import Cookies from 'js-cookie';

interface VoteState {
    options : Option[]
    currentOption : Option | null
}

const initialState: VoteState = {
    options: [],
    currentOption: null
}
export const optinsThunk = createAsyncThunk<Option[], void>("vote/options",
    async (_, {dispatch}) => {
        dispatch(setLoading(true));
        try{
             const token = Cookies.get ("authToken");
            const url = "http://localhost:3000/votes/options";
            const method = "GET";
            const response = await axios(url, {
                method: method,
                headers: token ? { Authorization: `Bearer ${token}` } : {},
            });
            dispatch(setSuccess(response.data.message));
            return response.data
        } catch (error: any) {
            dispatch(setError(error.message));
        }
        finally {
            dispatch(setLoading(false));
        }     
    }
)

const voteSlice = createSlice({
    name: "vote",
    initialState,
    reducers: {
        setOptions: (state, action: PayloadAction<Option[]>) => {
            state.options = action.payload;
        },
        setCurrentOption: (state, action: PayloadAction<Option | null>) => {
            state.currentOption = action.payload;
        },  
    },
    extraReducers: (builder) => {
        builder.addCase(optinsThunk.fulfilled, (state, action) => {
            state.options = action.payload;
        })
    }
})

export const { setOptions, setCurrentOption } = voteSlice.actions;
export default voteSlice.reducer;
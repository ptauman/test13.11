import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import reducer from "./authSlice";
const missileSlice = createSlice({
    name: 'missiles',
    initialState: {
      controlmisssiles: [],           
      users : [],
    },
    reducers: {
      addMissile: (state, action: PayloadAction<any>) => {
        state.controlmisssiles.push(action.payload);
      },
      reducerMissile: (state, action: PayloadAction<any>) => {
        state.controlmisssiles
    }
    }
  });
  
  export const { addMissile, reducerMissile} = missileSlice.actions;
  export default missileSlice.reducer;
  
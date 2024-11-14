import {configureStore} from '@reduxjs/toolkit'
import authSlice  from '../features/authSlice'
import statusSlice from '../features/statusSlice'
import voteSlice from '../features/voteSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        status : statusSlice,
        vote : voteSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchRestaurent = createAsyncThunk('restaurentSlice/fetchRestaurent', () => {
    return axios.get('/restaurants.json').then(res => res.data.restaurants)
})

 const storeSlice = createSlice({
    name: 'restaurentSlice',
    initialState: {
        loading: false,
        allRestaurents: [],
        error: ''
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurent.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchRestaurent.fulfilled, (state, action) => {
            state.loading = false
            state.allRestaurents = action.payload
            state.error = ""
        })
        builder.addCase(fetchRestaurent.rejected, (state, action) => {
            state.loading = false
            state.allRestaurents = []
            state.error = action.error.message
        })
    }
})

export default storeSlice.reducer
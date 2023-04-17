import { createSlice } from "@reduxjs/toolkit";
import { resetToDefault } from "../Reset/reset-action";

const filterTodosSlice = createSlice({
    name: '@@filterTodos',
    initialState: 'all',
    reducers: {
        setFilter: (_, action) => {
        return action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(resetToDefault, () => {
            return 'all'
        })
    }
});

export const {setFilter} = filterTodosSlice.actions;

export const filterReducer = filterTodosSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    teamsDetails: false,
    originDetails: false,
}

const sliceFilter = createSlice({
    name: 'sliceFilter',
    initialState,
    reducers: {
        actionTeamsDetails(state,action) {
            state.teamsDetails = action.payload;
        },
        actionOriginDetails(state,action) {
            state.originDetails = action.payload;
        },
    }
});

export const { actionTeamsDetails, actionOriginDetails } = sliceFilter.actions;

export default sliceFilter.reducer;
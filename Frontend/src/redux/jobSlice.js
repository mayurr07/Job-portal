import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name: "job",
    initialState: {
        allJobs: [],
        AllRecJobs: [],
        singleJob: null,
        searchRecJob: "",
        AllAppliedJob: [],
        searhedQuery:"",
    },
    reducers: {
        setAllJobs: (state, action) => {
            state.allJobs = action.payload;
        },
        setSingleJob: (state, action) => {
            state.singleJob = action.payload;
        },
        setAllRecJobs: (state, action) => {
            state.AllRecJobs = action.payload;
        },
        setSearchRecJob: (state, action) => {
            state.searchRecJob = action.payload;
        },
        setAllAppliedJob: (state, action) => {
            state.AllAppliedJob = action.payload;
        },
        setSearchedQuery: (state, action) => {
            state.searhedQuery = action.payload;
        }
        
    }
});

export const { setAllJobs, setSingleJob, setAllRecJobs, setSearchRecJob, setAllAppliedJob, setSearchedQuery } = jobSlice.actions;
export default jobSlice.reducer;
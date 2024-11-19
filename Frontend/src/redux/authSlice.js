import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        user: null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setAuthUser: (state, action) => {
            state.user = action.payload;
        },
        updateUser: (state, action) => {
            if (state.user) {
                state.user = { ...state.user, ...action.payload }; // Merge existing user data with updates
            }
        },
    },
});

export const { setLoading, setAuthUser, updateUser } = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit'


const initialState = {

    status: false,
    useDate: null


}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        login: (state, action) => {

            state.status = true;
            state.useDate = action.payload.useDate;

        },
        logout: (state) => {

            state.status = false;
            state.useDate = null;


        }

    }



})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
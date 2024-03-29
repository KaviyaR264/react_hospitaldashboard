import { createSlice } from "@reduxjs/toolkit";

const ReportsSlice = createSlice({
    name : 'Reports',
    initialState: {
        isLoading: false,
        message: null,
        data: [
            {
                details: "Information",
                date: "02/03/2024"
            }
        ],
        error: null       
    },
    reducers: {
        callReports: () => {

        },
        UpdateReportsData: (state,actions) => {
            console.log(actions?.payload);
            state.data = actions?.payload;
        },
        getStartReports: (state,actions) => {},
        getReportsSuccess: (state,actions) => {
            console.log('from store', actions?.payload?.data)
            state.data = actions?.payload?.data;
        },
        getReportsFailure: (state,actions) => {}
    }
})

export const {
    UpdateReportsData,
    getReportsFailure,
    getReportsSuccess,
    getStartReports
} = ReportsSlice?.actions

export default ReportsSlice.reducer;

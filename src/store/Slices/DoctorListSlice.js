import { createSlice } from "@reduxjs/toolkit";

const DoctorListSlice = createSlice({
    name : 'DoctorList',
    initialState: {
        isLoading: false,
        message: null,
        data: [
            {
                title: "public",
                description: "sample",
                review: "Market",
                category: "Public",
                status: "Open",
            }
        ],
        error: null       
    },
    reducers: {
        callDoctorList: () => {

        },
        UpdateDoctorListData: (state,actions) => {
            console.log(actions?.payload);
            state.data = actions?.payload;
        },
        getStartDoctorList: (state,actions) => {},
        getDoctorListSuccess: (state,actions) => {
            console.log('from store', actions?.payload?.data)
            state.data = actions?.payload?.data;
        },
        getDoctorListFailure: (state,actions) => {}
    }
})

export const {
    UpdateDoctorListData,
    getDoctorListFailure,
    getDoctorListSuccess,
    getStartDoctorList
} = DoctorListSlice?.actions

export default DoctorListSlice.reducer;

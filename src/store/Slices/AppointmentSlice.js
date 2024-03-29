import { createSlice } from "@reduxjs/toolkit";

const AppointmentsSlice = createSlice({
    name : 'Appointments',
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
        callAppointments: () => {

        },
        UpdateAppointmentsData: (state,actions) => {
            console.log(actions?.payload);
            state.data = actions?.payload;
        },
        getStartAppointments: (state,actions) => {},
        getAppointmentsSuccess: (state,actions) => {
            console.log('from store', actions?.payload?.data)
            state.data = actions?.payload?.data;
        },
        getAppointmentsFailure: (state,actions) => {}
    }
})

export const {
    UpdateAppointmentsData,
    getAppointmentsFailure,
    getAppointmentsSuccess,
    getStartAppointments
} = AppointmentsSlice?.actions

export default AppointmentsSlice.reducer;

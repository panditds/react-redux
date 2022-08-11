import { createSlice } from "@reduxjs/toolkit";
const initialval = [];
export const tasksSlice = createSlice({
    name: "tasks",
    initialState:initialval,
    reducers:{
        addTask: (state, action)=>{
          
            state.push(action.payload.room);
        },
       
    }
});

export const {addTask} = tasksSlice.actions;

export default tasksSlice.reducer;

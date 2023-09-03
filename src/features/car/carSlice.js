import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [
    {id:"models",name:"Model S"},
    {id:"model3",name:"Model 3"},
    {id:"modelx",name:"Model X"},
    {id:"modely",name:"Model Y"},
    {id:"/",name:"Solar Roof"},
    {id:"/",name:"Solar Panels"},
  ],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;

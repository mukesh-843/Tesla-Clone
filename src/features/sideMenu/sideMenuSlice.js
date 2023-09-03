import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sideMenus: [
    {id:1,name:"Existing Inventory"},
    {id:2,name:"Used Inventory"},
    {id:3,name:"Trade-In"},
    {id:4,name:"Test Drive"},
    {id:5,name:"Insurance"},
    {id:6,name:"Cybertruck"},
    {id:7,name:"Roadster"},
    {id:8,name:"Semi"},
    {id:9,name:"Charging"},
    {id:10,name:"Powerwall"},
    {id:11,name:"Commercial Energy"},
    {id:12,name:"Utilities"},
    {id:13,name:"Find Us"},
    {id:14,name:"Support"},
    {id:15,name:"Investor Relations"},
  ],
};

const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectsideMenus = (state) => state.sideMenu.sideMenus;

export default sideMenuSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import carReducer from "../features/car/carSlice";
import sideMenuReducer from "../features/sideMenu/sideMenuSlice";
export const store = configureStore({
  reducer: {
    car: carReducer,
    sideMenu: sideMenuReducer,
  },
});

import { combineReducers } from "@reduxjs/toolkit";
import { locationService } from "../service/locationService";




const rootReducer = combineReducers({
 
    [locationService.reducerPath]: locationService.reducer,
});

export default rootReducer;

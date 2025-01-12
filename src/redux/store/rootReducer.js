import { combineReducers } from "@reduxjs/toolkit";
import { reducer as authReducer} from "../slice/auth";


export const rootReducer =combineReducers({
    auth:authReducer,
})
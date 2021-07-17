import {combineReducers} from "redux";
import {topReducer} from "./TopReducer";

export const rootReducer = combineReducers({
    top: topReducer,
});

export type RootState = ReturnType<typeof rootReducer>
import {combineReducers} from "redux";
import {topReducer} from "./TopReducer";
import {filmDetailReducer} from "./FilmDetailReducer";
import {staffDetailReducer} from "./StaffDetailReducer";

export const rootReducer = combineReducers({
    top: topReducer,
    filmDetail: filmDetailReducer,
    staffDetail: staffDetailReducer,
});

export type RootState = ReturnType<typeof rootReducer>
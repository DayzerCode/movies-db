import {combineReducers} from "redux";
import {topReducer} from "./TopReducer";
import {filmDetailReducer} from "./FilmDetailReducer";

export const rootReducer = combineReducers({
    top: topReducer,
    filmDetail: filmDetailReducer,
});

export type RootState = ReturnType<typeof rootReducer>
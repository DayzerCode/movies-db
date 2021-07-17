import FilmDetailResponse from "../../api/kinopoisk/Responses/FilmDetailResponse";

export enum FilmDetailTypes {
    FETCH = 'FETCH',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR'
}

export interface FetchFilmDetailAction {
    type: FilmDetailTypes.FETCH
}

export interface SuccessFilmDetailAction {
    type: FilmDetailTypes.SUCCESS,
    payload: FilmDetailResponse
}

export interface ErrorFilmDetailAction {
    type: FilmDetailTypes.ERROR,
    payload: string
}

export type FilmDetailType = FetchFilmDetailAction|SuccessFilmDetailAction|ErrorFilmDetailAction;
import FilmDetailResponse from "../../api/kinopoisk/Responses/FilmDetailResponse";
import StaffResponse from "../../api/kinopoisk/Responses/StaffResponse";

export enum FilmDetailTypes {
    FETCH_FILM = 'FETCH_FILM',
    SUCCESS_FILM = 'SUCCESS_FILM',
    FILM_ERROR = 'FILM_ERROR',
    FETCH_STAFF_LIST = 'FETCH_STAFF_LIST',
    SUCCESS_STAFF_LIST = 'SUCCESS_STAFF_LIST',
    ERROR_STAFF_LIST = 'ERROR_STAFF_LIST',
}

export interface FetchFilmDetailAction {
    type: FilmDetailTypes.FETCH_FILM
}

export interface SuccessFilmDetailAction {
    type: FilmDetailTypes.SUCCESS_FILM,
    payload: FilmDetailResponse
}

export interface ErrorFilmDetailAction {
    type: FilmDetailTypes.FILM_ERROR,
    payload: string
}

export interface FetchStaffListAction {
    type: FilmDetailTypes.FETCH_STAFF_LIST
}

export interface SuccessStaffListAction {
    type: FilmDetailTypes.SUCCESS_STAFF_LIST,
    payload: StaffResponse[]
}

export interface ErrorStaffListAction {
    type: FilmDetailTypes.ERROR_STAFF_LIST,
    payload: string
}

export type FilmDetailType = FetchFilmDetailAction|SuccessFilmDetailAction|ErrorFilmDetailAction|FetchStaffListAction|SuccessStaffListAction|ErrorStaffListAction;
import FilmResponse from "./FilmResponse";

export default interface TopResponse {
    pagesCount: number,
    films: FilmResponse[]
}
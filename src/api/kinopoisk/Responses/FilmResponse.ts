import CountryResponse from "./CountryResponse";
import GenreResponse from "./GenreResponse";

export default interface FilmResponse {
    filmId: number,
    nameRu: string,
    nameEn: string,
    year: number,
    filmLength: number,
    countries: CountryResponse[],
    genres: GenreResponse[],
    rating: number,
    ratingVoteCount: number,
    posterUrl: string,
    posterUrlPreview: string
}
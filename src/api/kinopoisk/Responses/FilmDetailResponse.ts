import FilmResponse from "./FilmResponse";

export default interface FilmDetailResponse extends FilmResponse {
    slogan: string,
    description: string,
    type: string,
    ratingMpaa: string,
    ratingAgeLimits: string,
    premiereRu: string,
    distributors: string,
    premiereWorld: string,
    premiereDigital: string,
    premiereWorldCountry: string,
    premiereDvd: string,
    premiereBluRay: string,
    distributorRelease: string,
    facts: string[],
}
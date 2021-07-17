import FilmResponse from "./FilmResponse";

export default interface FilmDetailResponse extends FilmResponse {
    slogan: string,
    description: string,
    type: string,
    ratingMpaa: string,
    ratingAgeLimits: string,
    premiereRu: Date|undefined,
    distributors: string,
    premiereWorld: Date|undefined,
    premiereDigital: Date|undefined,
    premiereWorldCountry: string,
    premiereDvd: Date|undefined,
    premiereBluRay: Date|undefined,
    distributorRelease: string,
    facts: string[],
}
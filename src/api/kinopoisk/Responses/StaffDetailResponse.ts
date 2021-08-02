export default interface StaffDetailResponse {
    personId: number,
    nameRu: string,
    nameEn: string,
    sex: string,
    posterUrl: string,
    growth: string,
    birthday: string,
    death: string|null,
    age: number,
    birthplace: string,
    deathplace: string,
    hasAwards: boolean,
    profession: string,
    facts: string[],
    films: Film[],
}

interface Film {
    "filmId": number,
    "nameRu": string,
    "nameEn": string,
    "rating": string,
    "general": boolean,
    "description": string,
    "professionKey": string
}
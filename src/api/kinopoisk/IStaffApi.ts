import StaffResponse from "./Responses/StaffResponse";

export default interface IStaffApi {
    getListByFilmId: (filmId: number) => Promise<StaffResponse[]>
}
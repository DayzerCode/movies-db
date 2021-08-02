import StaffResponse from "./Responses/StaffResponse";
import StaffDetailResponse from "./Responses/StaffDetailResponse";

export default interface IStaffApi {
    getListByFilmId: (filmId: number) => Promise<StaffResponse[]>;

    getStaffDetail: (staffId: number) => Promise<StaffDetailResponse>;
}
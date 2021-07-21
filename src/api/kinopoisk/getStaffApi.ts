import StaffApi from "./StaffApi";

export default function getStaffApi(): StaffApi {
    return new StaffApi();
}
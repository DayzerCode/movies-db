import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StaffResponse from "../../api/kinopoisk/Responses/StaffResponse";
import './StaffList.css'
import StaffHelper from "../../utils/StaffHelper";
interface StaffListProps {
    staffList: StaffResponse[]
}

const StaffList: React.FC<StaffListProps> = (props) => {
    return (
        <ul className="list-group">
            {props.staffList.map((staff, index) => {
                return (
                    <li key={index} className="list-group-item align-items-center">
                        <a className="d-flex justify-content-between" href={StaffHelper.getDetailLink(staff.staffId)}>
                            {staff.nameRu} / {staff.nameEn}
                            <img className="poster-img" src={staff.posterUrl} alt={staff.nameEn}/>
                        </a>
                    </li>
                )
            })}
        </ul>
    );
}

export default StaffList;

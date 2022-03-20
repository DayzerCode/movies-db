import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import StaffResponse from "../../api/kinopoisk/Responses/StaffResponse";
import './StaffList.css'
import StaffHelper from "../../utils/StaffHelper";
import {Link} from 'react-router-dom';
interface StaffListProps {
    staffList: StaffResponse[]
}

const StaffList: React.FC<StaffListProps> = (props) => {
    return (
        <ul className="list-group">
            {props.staffList.map((staff, index) => {
                return (
                    <li key={index} className="list-group-item align-items-center">
                        <Link className="d-flex justify-content-between" to={StaffHelper.getDetailLink(staff.staffId)}>
                            {staff.nameRu} / {staff.nameEn}
                            <img className="poster-img" src={staff.posterUrl} alt={staff.nameEn}/>
                        </Link>
                    </li>
                )
            })}
        </ul>
    );
}

export default StaffList;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FilmDetail.css';
import StaffResponse from "../../../api/kinopoisk/Responses/StaffResponse";
import FilmDetailResponse from "../../../api/kinopoisk/Responses/FilmDetailResponse";
import ArrayHelper from "../../../utils/ArrayHelper";
import StaffList from "../../staffList/StaffList";

interface FilmDetailProps {
    film: FilmDetailResponse;
    staffList?: StaffResponse[];
    fetchStaffList: () => void;
}

const FilmDetail: React.FC<FilmDetailProps> = ({ film, staffList, fetchStaffList }) => {
    const {
        nameRu,
        nameEn,
        posterUrl,
        slogan,
        year,
        genres,
        countries,
        description,
        facts
    } = film;

    if (film) {
        return (
            <div className="card p-4">
                <div className="row">
                    <div className="col-5">
                        <img alt={nameRu} src={posterUrl} className="card-img-top"/>
                    </div>
                    <div className="col-7">
                        <div className="card-body">
                            <h5 className="card-title">{nameRu} / {nameEn}</h5>
                            <p className="card-text">{slogan}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Дата выхода: {year}</li>
                            <li className="list-group-item">{genres && ArrayHelper.getListAsString(genres, 'genre')}</li>
                            <li className="list-group-item">{countries && ArrayHelper.getListAsString(countries, 'country')}</li>
                        </ul>

                        <div className="card-body">
                            {description}
                        </div>
                    </div>
                </div>
                <div id="accordion" className="w-100 mt-4 ">
                    {facts && facts.length > 0 &&
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Интересные факты
                                </button>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    {facts.map((fact, index) => {
                                        return (
                                            <li key={index} className="list-group-item">{fact}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    }
                     <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h5 className="mb-0">
                                <button onClick={fetchStaffList} className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Актеры
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                {staffList && staffList.length > 0 &&
                                    <StaffList staffList={staffList}/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (<p>FilmId not found</p>);
}

export default FilmDetail;

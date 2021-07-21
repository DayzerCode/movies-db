import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FilmDetail.css';
import {RouteComponentProps} from 'react-router-dom';
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {fetchFilmDetail} from "../../../store/action-creators/FetchFilmDetail";
import Loading from "../../common/loading/Loading";
import ArrayHelper from "../../../utils/ArrayHelper";
import {fetchStaffListByFilmId} from "../../../store/action-creators/FetchStaffListByFilmId";
import StaffList from "../../staffList/StaffList";

interface FilmDetailParams {
    id?: string | undefined;
}

type FilmDetailProps = RouteComponentProps<FilmDetailParams>;

const FilmDetail: React.FC<FilmDetailProps> = (props) => {
    const dispatch = useDispatch();

    const {film, staffList} = useTypeSelector(state => state.filmDetail);
    useEffect(() => {
        if (props.match.params.id) {
            const filmId = parseInt(props.match.params.id);
            dispatch(fetchFilmDetail(filmId));
        }
    }, []);

    const fetchStaffList = () => {
        if (film.result && film.result.filmId && staffList.result === null) {
            dispatch(fetchStaffListByFilmId(film.result.filmId));
        }
    }

    if (film.isLoading) {
        return <Loading/>;
    }

    if (film.error) {
        return (<p>{film.error}</p>);
    }
    if (film.result) {
        return (
            <div className="card p-4">
                <div className="row">
                    <div className="col-5">
                        <img alt={film.result.nameRu} src={film.result.posterUrl} className="card-img-top"/>
                    </div>
                    <div className="col-7">
                        <div className="card-body">
                            <h5 className="card-title">{film.result.nameRu} / {film.result.nameEn}</h5>
                            <p className="card-text">{film.result.slogan}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Дата выхода: {film.result.year}</li>
                            <li className="list-group-item">{film.result.genres && ArrayHelper.getListAsString(film.result.genres, 'genre')}</li>
                            <li className="list-group-item">{film.result.countries && ArrayHelper.getListAsString(film.result.countries, 'country')}</li>
                        </ul>

                        <div className="card-body">
                            {film.result.description}
                        </div>
                    </div>
                </div>
                <div id="accordion" className="w-100 mt-4 ">
                    {film.result.facts && film.result.facts.length > 0 &&
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
                                    {film.result.facts.map((fact, index) => {
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
                                <button onClick={() => fetchStaffList()} className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Актеры
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                {staffList.result && staffList.result.length > 0 &&
                                    <StaffList staffList={staffList.result}/>
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

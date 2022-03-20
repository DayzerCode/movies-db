import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {RouteComponentProps} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {fetchStaffDetail} from "../../store/action-creators/FetchStaffDetail";
import Loading from "../common/loading/Loading";
import FilmHelper from "../../utils/FilmHelper";
import {Link} from 'react-router-dom';

interface StaffDetailParams {
    id?: string | undefined;
}

type StaffDetailProps = RouteComponentProps<StaffDetailParams>;

const StaffDetail: React.FC<StaffDetailProps> = (props) => {
    const dispatch = useDispatch();

    const {result, isLoading, error} = useTypeSelector(state => state.staffDetail);
    useEffect(() => {
        if (props.match.params.id) {
            const staffId = parseInt(props.match.params.id);
            dispatch(fetchStaffDetail(staffId));
        }
    }, []);

    if (isLoading) {
        return <Loading/>;
    }

    if (error) {
        return (<p>{error}</p>);
    }
    if (result) {
        return (
            <div className="card p-4">
                <div className="row">
                    <div className="col-5">
                        <img alt={result.posterUrl} src={result.posterUrl} className="card-img-top"/>
                    </div>
                    <div className="col-7">
                        <div className="card-body">
                            <h5 className="card-title">{result.nameRu} / {result.nameEn}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">{result.profession}</li>
                            <li className="list-group-item">Возраст: {result.age}</li>
                            <li className="list-group-item">Имеет награды: {result.hasAwards ? 'Да' : 'Нет'}</li>
                        </ul>
                    </div>
                </div>
                <div id="accordion" className="w-100 mt-4 ">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Участие в фильмах
                                </button>
                            </h5>
                        </div>
                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    {result.films.map((film, index) => {
                                        return (
                                            <li key={index} className="list-group-item align-items-center">
                                                <Link to={FilmHelper.getDetailLink(film.filmId)}>
                                                    <p>{film.nameRu}</p>
                                                    <p>Роль: {film.professionKey}</p>
                                                    <p>{film.description}</p>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (<p>StaffId not found</p>);
}

export default StaffDetail;

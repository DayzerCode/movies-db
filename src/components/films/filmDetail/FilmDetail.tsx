import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FilmDetail.css';
import {RouteComponentProps} from 'react-router-dom';
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {fetchFilmDetail} from "../../../store/action-creators/FetchFilmDetail";
import Loading from "../../common/loading/Loading";
import ArrayHelper from "../../../utils/ArrayHelper";
import Rating from "../rating/Rating";

interface FilmDetailParams {
    id?: string | undefined;
}

type FilmDetailProps = RouteComponentProps<FilmDetailParams>;

const FilmDetail: React.FC<FilmDetailProps> = (props) => {
    const dispatch = useDispatch();

    const {result, isLoading, error} = useTypeSelector(state => state.filmDetail);
    useEffect(() => {
        if (props.match.params.id) {
            const filmId = parseInt(props.match.params.id);
            dispatch(fetchFilmDetail(filmId));
        }
    }, []);
    if (isLoading) {
        return <Loading/>;
    }

    if (error) {
        return (<p>{error}</p>);
    }
    if (result) {
        console.log(result);
        return (
            <div className="card p-4">
                <div className="row">
                    <div className="col-5">
                        <img alt={result.nameRu} src={result.posterUrl} className="card-img-top"/>
                    </div>
                    <div className="col-7">
                        <div className="card-body">
                            <h5 className="card-title">{result.nameRu} / {result.nameEn}</h5>
                            <p className="card-text">{result.slogan}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Дата выхода: {result.year}</li>
                            <li className="list-group-item">{result.genres && ArrayHelper.getListAsString(result.genres, 'genre')}</li>
                            <li className="list-group-item">{result.countries && ArrayHelper.getListAsString(result.countries, 'country')}</li>
                        </ul>

                        <div className="card-body">
                            {result.description}
                        </div>
                    </div>
                </div>
                <div id="accordion" className="w-100 mt-4 ">
                    {result.facts && result.facts.length > 0 &&
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
                                    {result.facts.map((fact, index) => {
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
                                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Актеры
                                </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div className="card-body">
                                in progress
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

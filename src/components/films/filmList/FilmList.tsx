import React from 'react';
import {Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import FilmResponse from "../../../api/kinopoisk/Responses/FilmResponse";
import Rating from "../../films/rating/Rating";
import ArrayHelper from "../../../utils/ArrayHelper";
import './FilmList.css';
import {RatingType} from "../../../types/kinopoisk/RatingType";
import RatingWaiting from "../ratingWaiting/RatingWaiting";
import FilmHelper from "../../../utils/FilmHelper";
import {Link} from 'react-router-dom';

interface FilmListProps {
    films: FilmResponse[],
    ratingType: RatingType
}

const FilmList: React.FC<FilmListProps> = (props) => {
    return (
        <>
            {props.films && props.films.length > 0 &&
            <div className="row mt-2">
                {props.films.map((film, index) =>
                    <React.Fragment key={film.filmId}>
                        <div className="col-md-6">
                            <Card className="film-item">
                                <Card.Body>
                                    <Card.Title>{film.nameRu + ' / ' + film.nameEn}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted"> {film.year} г.</Card.Subtitle>
                                    <Card.Img variant="top" src={film.posterUrlPreview}/>
                                    <div className="card-text">
                                        {props.ratingType === RatingType.STANDARD ? (
                                            <Rating rating={film.rating}/>
                                        ) : (
                                            <RatingWaiting rating={String(film.rating)}/>
                                        )}
                                        <p>{ArrayHelper.getListAsString(film.countries, 'country')}</p>
                                        <p>{ArrayHelper.getListAsString(film.genres, 'genre')}</p>
                                        <p>Длительность: {film.filmLength} мин.</p>
                                    </div>
                                    <Link to={FilmHelper.getDetailLink(film.filmId)} className="btn btn-primary">Подробнее</Link>
                                </Card.Body>
                            </Card>
                        </div>
                        {index % 2 === 1 && <div className="clearfix"/>}
                    </React.Fragment>
                )
                }
            </div>}
        </>
    );
}

export default FilmList;

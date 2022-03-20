import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {Dropdown, DropdownButton} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {fetchTop} from "../../store/action-creators/FetchTop";
import {TopOfTypeNames, TopOfTypeParameters} from "../../types/kinopoisk/TopType";
import {RatingType} from "../../types/kinopoisk/RatingType";
import Loading from "../../components/common/loading/Loading";
import MainPagination from "../../components/common/mainPagination/MainPagination";
import FilmList from "../../components/films/filmList/FilmList";

function TopFilmsPage() {
    const {result, isLoading, error} = useTypeSelector(state => state.top);
    const [currentTop, setCurrentTop] = useState(TopOfTypeParameters.TOP_250_BEST_FILMS);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTop(page, currentTop));
    }, [page, currentTop]);

    if (isLoading) {
        return <Loading/>;
    }

    if (error) {
        return (<p>{error}</p>);
    }
    const fetchTopByType = (eventKey: any) : void => {
        setCurrentTop(eventKey);
    };

    const getRatingType = () : RatingType => {
        if (currentTop === TopOfTypeParameters.TOP_AWAIT_FILMS) {
            return RatingType.WAITING;
        }
        return RatingType.STANDARD;
    }

    return (
        <>
            <h1 className="h1 mb-4">{TopOfTypeNames[currentTop]}</h1>
            <DropdownButton className="mb-4" onSelect={fetchTopByType} id="dropdown-item-button" title="Выбрать категорию">
                <Dropdown.Item as="button" eventKey={TopOfTypeParameters.TOP_250_BEST_FILMS}>{TopOfTypeNames.TOP_250_BEST_FILMS}</Dropdown.Item>
                <Dropdown.Item as="button" eventKey={TopOfTypeParameters.TOP_100_POPULAR_FILMS}>{TopOfTypeNames.TOP_100_POPULAR_FILMS}</Dropdown.Item>
                <Dropdown.Item as="button" eventKey={TopOfTypeParameters.TOP_AWAIT_FILMS}>{TopOfTypeNames.TOP_AWAIT_FILMS}</Dropdown.Item>
            </DropdownButton>
            {result && <>
                <MainPagination totalPages={result.pagesCount} currentPage={page} fetchPage={setPage}/>
                <FilmList films={result.films} ratingType={getRatingType()}/>
                <MainPagination totalPages={result.pagesCount} currentPage={page} fetchPage={setPage}/>
            </>
            }
        </>
    );
}

export default TopFilmsPage;

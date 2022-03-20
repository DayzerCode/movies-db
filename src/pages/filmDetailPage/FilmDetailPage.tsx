import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {RouteComponentProps} from 'react-router-dom';
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {fetchFilmDetail} from "../../store/action-creators/FetchFilmDetail";
import Loading from "../../components/common/loading/Loading";
import {fetchStaffListByFilmId} from "../../store/action-creators/FetchStaffListByFilmId";
import FilmDetail from "../../components/films/filmDetail/FilmDetail";

interface FilmDetailPageParams {
    id?: string | undefined;
}

type FilmDetailPageProps = RouteComponentProps<FilmDetailPageParams>;

const FilmDetailPage: React.FC<FilmDetailPageProps> = (props) => {
    const dispatch = useDispatch();

    const {film, staffList} = useTypeSelector(state => state.filmDetail);
    useEffect(() => {
        if (props.match.params.id) {
            const filmId = parseInt(props.match.params.id);
            dispatch(fetchFilmDetail(filmId));
        }
    }, []);

    const fetchStaffList = (): void => {
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
            <FilmDetail film={film.result} fetchStaffList={fetchStaffList} staffList={staffList && staffList.result ? staffList.result : undefined}/>
        );
    }
    return (<p>FilmId not found</p>);
}

export default FilmDetailPage;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FilmDetail.css';
import { RouteComponentProps } from 'react-router-dom';

interface FilmDetailParams {
    id?: string|undefined;
}
type FilmDetailProps = RouteComponentProps<FilmDetailParams>;

const FilmDetail: React.FC<FilmDetailProps> = (props) => {
    return (
        <>
            FilmDetailProps {props.match.params.id}
        </>
    );
}

export default FilmDetail;

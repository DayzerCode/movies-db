import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopFilms from "./components/topFilms/TopFilms";
import MainLayout from "./components/Layouts/Main/mainLayout/MainLayout";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import FilmDetail from "./components/films/filmDetail/FilmDetail";

function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                    <Switch>
                        <Route exact path='/' component={TopFilms}/>
                        <Route exact path='/film/:id' component={FilmDetail}/>
                    </Switch>
            </MainLayout>
        </BrowserRouter>
    );
}

export default App;

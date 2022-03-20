import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from "./components/Layouts/Main/mainLayout/MainLayout";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import StaffDetailPage from "./pages/staffDetailPage/StaffDetailPage";
import TopFilmsPage from "./pages/topFilmsPage/TopFilmsPage";
import FilmDetailPage from "./pages/filmDetailPage/FilmDetailPage";

function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                    <Switch>
                        <Route exact path='/' component={TopFilmsPage}/>
                        <Route exact path='/film/:id' component={FilmDetailPage}/>
                        <Route exact path='/staff/:id' component={StaffDetailPage}/>
                    </Switch>
            </MainLayout>
        </BrowserRouter>
    );
}

export default App;

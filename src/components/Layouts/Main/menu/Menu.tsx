import React from "react";
import './Menu.css'
import MenuItem from "../../../../interfaces/MenuItem";
import {Link} from 'react-router-dom';

const Menu: React.FC = () => {
    const menu: MenuItem[] = [
        {id: 1, text: 'Поиск фильмов', link: '/'},
        {id: 2, text: 'Топ фильмов', link: '/top/'},
        {id: 3, text: 'Релизы', link: '/releases/'}
    ];
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light mb-5">
                <Link className="navbar-brand" to="/">MoviesDB</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {menu.map(menuItem => {
                           return (
                               <li key={menuItem.id} className="nav-item">
                                    <Link className="nav-link" to={menuItem.link}>{menuItem.text}</Link>
                               </li>
                           )
                        })}
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    );
}

export default Menu;
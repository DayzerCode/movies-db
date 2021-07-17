import React from "react";
import Menu from "../menu/Menu";

const MainLayout: React.FC = (props) => {
    return (
        <div className="App">
            <div className="container">
                <Menu/>
                {props.children}
                <p>powered by Kinopoiskapiunofficial.tech</p>
            </div>
        </div>
    );
}

export default MainLayout;
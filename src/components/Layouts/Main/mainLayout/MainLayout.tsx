import React from "react";
import Menu from "../menu/Menu";

const MainLayout: React.FC = ({children}) => {
    return (
        <div className="App">
            <div className="container">
                <Menu/>
                {children}
                <p>powered by Kinopoiskapiunofficial.tech</p>
            </div>
        </div>
    );
}

export default MainLayout;
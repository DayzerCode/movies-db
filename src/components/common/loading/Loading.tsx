import React from "react";
import './loading.css';

const Loading: React.FC = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="loading spinner-border text-info">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}

export default Loading;
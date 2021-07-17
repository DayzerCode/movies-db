import React from "react";

interface RatingProps {
    rating: number
}

const Rating: React.FC<RatingProps> = (props) => {

    const ratingColor = () => {
        if (props.rating >= 7) {
            return 'text-success';
        } else if (props.rating >= 5) {
            return 'text-warning';
        } else {
            return 'text-danger';
        }
    }
    return (<p className={ratingColor()}>Рейтинг: {props.rating}</p>);
}

export default Rating;
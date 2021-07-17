import React from "react";

interface RatingProps {
    rating: string
}

const RatingWaiting: React.FC<RatingProps> = (props) => {
    const ratingColor = () => {
        const ratingNumber = parseInt(props.rating);
        console.log(ratingNumber);
        if (ratingNumber >= 80) {
            return 'text-success';
        } else if (ratingNumber >= 55) {
            return 'text-warning';
        } else {
            return 'text-danger';
        }
    }
    return (<p className={ratingColor()}>Рейтинг ожидания: {props.rating}</p>);
}

export default RatingWaiting;
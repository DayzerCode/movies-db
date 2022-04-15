import React from "react";

interface RatingProps {
    rating: string
}

const RatingWaiting: React.FC<RatingProps> = ({rating}) => {
    const ratingColor = () => {
        const ratingNumber = parseInt(rating);
        if (ratingNumber >= 80) {
            return 'text-success';
        } else if (ratingNumber >= 55) {
            return 'text-warning';
        } else {
            return 'text-danger';
        }
    }
    return (<p className={ratingColor()}>Рейтинг ожидания: {rating}</p>);
}

export default RatingWaiting;
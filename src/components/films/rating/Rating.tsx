import React from "react";

interface RatingProps {
    rating: number
}

const Rating: React.FC<RatingProps> = ({rating}) => {
    const ratingColor = () => {
        if (rating >= 7) {
            return 'text-success';
        } else if (rating >= 5) {
            return 'text-warning';
        } else {
            return 'text-danger';
        }
    }
    return (<p className={ratingColor()}>Рейтинг: {rating}</p>);
}

export default Rating;
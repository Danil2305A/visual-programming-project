import { useState } from 'react';

export default function RatingStars() {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <div className="input-rating">
            <div className="input__title">Overall Rating</div>
            <div className="input-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`input-star ${(hoverRating || rating) >= star ? 'active' : ''}`}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                    >
            {star}
          </span>
                ))}
            </div>
            <input type="hidden" value={rating} />
        </div>
    );
}
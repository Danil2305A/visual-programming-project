export default function CompletedCard({ review, onReviewClick }) {
    return (
        <div className="completed-card">
            <div className="completed-card__title">{review.title}</div>
            <div className="completed-card__authors">Authors: {review.authors}</div>
            <div className="completed-card__score-text">Review Score</div>
            <div className="completed-card__score">{'★'.repeat(review.score)}{'☆'.repeat(5 - review.score)}</div>
            <div className="completed-card__button">
                <button
                    className="button button_primary button_big"
                    onClick={onReviewClick}
                >
                    View Full Review
                </button>
            </div>
            <div className="completed-card__date">Completed: {review.date}</div>
        </div>
    );
}
import CompletedCard from './CompletedCard';

export default function ReviewerCompleted({ onReviewClick }) {
    const completedReviews = [
        {
            id: 1,
            title: 'Neural Networks in Image Processing',
            authors: 'James Anderson, Maria Garcia',
            score: 4,
            date: 'Apr 20, 2025'
        },
        {
            id: 2,
            title: 'Deep Learning for Natural Language Processing',
            authors: 'Robert Chen, Emily Wilson',
            score: 5,
            date: 'Apr 18, 2025'
        }
    ];

    return (
        <div className="reviewer__completed">
            {completedReviews.map(review => (
                <CompletedCard
                    key={review.id}
                    review={review}
                    onReviewClick={onReviewClick}
                />
            ))}
        </div>
    );
}
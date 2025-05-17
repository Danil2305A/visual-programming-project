export default function ReviewerProgress({ onReviewClick }) {
    const newRequests = [
        {
            id: 1,
            title: 'Advanced xfckhjgh jksdjks hsadhjf sdj jkgskdg jsjdgksdg',
            author: 'Mark Williams',
            abstract: 'This paper sd sdg ksg jsdjg hsjdjhg sjdjgfjsdof jshdjf sg',
            date: 'May 1, 2025'
        }
    ];

    const inProgress = [
        {
            id: 2,
            title: 'Machine Learning Applications',
            author: 'Sarah Johnson',
            date: 'May 15, 2025'
        }
    ];

    return (
        <div className="reviewer__progress">
            <div className="reviewer__progress-new">
                <div className="reviewer__progress-title">New Review Requests</div>
                {newRequests.map(request => (
                    <div key={request.id} className="reviewer__progress-card">
                        <div className="reviewer__progress-card-title">{request.title}</div>
                        <div className="reviewer__progress-card-author">Author: {request.author}</div>
                        <div className="reviewer__progress-card-abstract">Abstract: {request.abstract}</div>
                        <div className="reviewer__progress-card-buttons">
                            <button className="button button_secondary">Decline</button>
                            <button className="button button_primary" onClick={onReviewClick}>Accept</button>
                        </div>
                        <div className="reviewer__progress-card-date">Request: {request.date}</div>
                    </div>
                ))}
            </div>
            <div className="reviewer__progress-old">
                <div className="reviewer__progress-title">In Progress Reviews</div>
                {inProgress.map(review => (
                    <div key={review.id} className="reviewer__progress-card">
                        <div className="reviewer__progress-card-title">{review.title}</div>
                        <div className="reviewer__progress-card-author">Author: {review.author}</div>
                        <div className="reviewer__progress-card-buttons">
                            <button className="button button_primary" onClick={onReviewClick}>
                                Continue Review
                            </button>
                        </div>
                        <div className="reviewer__progress-card-date">Due: {review.date}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
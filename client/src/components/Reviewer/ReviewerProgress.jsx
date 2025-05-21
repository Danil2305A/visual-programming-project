import { useEffect, useState } from "react";

export default function ReviewerProgress({ onReviewClick, reviews }) {
    const [in_proces_reviews, setInProcesReview] = useState([]);

    useEffect(() => {
        let new_in_proces_reviews = [];
        for (let review of reviews) {
            if (review.isDraft) {
                new_in_proces_reviews.push(review);
            }
        }
        setInProcesReview(new_in_proces_reviews);
    }, [setInProcesReview]);

    return (
        <div className="reviewer__progress">
            {/*<div className="reviewer__progress-new">*/}
            {/*    <div className="reviewer__progress-title">New Review Requests</div>*/}
            {/*    {newRequests.map(request => (*/}
            {/*        <div key={request.id} className="reviewer__progress-card">*/}
            {/*            <div className="reviewer__progress-card-title">{request.title}</div>*/}
            {/*            <div className="reviewer__progress-card-author">Author: {request.author}</div>*/}
            {/*            <div className="reviewer__progress-card-abstract">Abstract: {request.abstract}</div>*/}
            {/*            <div className="reviewer__progress-card-buttons">*/}
            {/*                <button className="button button_secondary">Decline</button>*/}
            {/*                <button className="button button_primary" onClick={onReviewClick}>Accept</button>*/}
            {/*            </div>*/}
            {/*            <div className="reviewer__progress-card-date">Request: {request.date}</div>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}
            <div className="reviewer__progress-old">
                <div className="reviewer__progress-title">In Progress Reviews</div>
                {in_proces_reviews.map(review => (
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
                <button className="button button_primary" onClick={onReviewClick}>New review</button>
            </div>
        </div>
    );
}
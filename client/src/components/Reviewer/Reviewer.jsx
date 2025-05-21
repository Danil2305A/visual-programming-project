import { useState, useEffect } from 'react';
import ReviewerInfo from './ReviewerInfo';
import ReviewerProgress from './ReviewerProgress';
import ReviewerCompleted from './ReviewerCompleted';
import ReviewerSubmit from './ReviewerSubmit';
import axios from 'axios';
import { SERVER_URL } from '../../utils/fileUtils';

export default function Reviewer({ user }) {
    const [activeTab, setActiveTab] = useState('info');
    const [showSubmitForm, setShowSubmitForm] = useState(false);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        try {
            const send = async () => {
                const all_reviews = (await axios.get(`${SERVER_URL}/reviews`)).data;
                let user_reviews = [];
                for (let review of all_reviews) {
                    if (review.reviewerId === user.id) {
                        user_reviews.push(review);
                    }
                }
                setReviews(user_reviews);
            };
            send();
        } catch (err) {
            console.error(err);
        }
    }, [setReviews]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setShowSubmitForm(false);
    };

    const handleReviewClick = () => {
        setShowSubmitForm(true);
    };

    const handleCloseSubmit = () => {
        setShowSubmitForm(false);
    };

    return (
        <div className="reviewer">
            <div className="content">
                <div className="reviewer__header">
                    <div className="reviewer__title">Review System</div>
                    <div className="reviewer__title-info">
                        <img src="/images/iconNotice.svg" className="reviewer__image" alt="Notice" />
                        <img src="/images/iconUser.svg" className="reviewer__image" alt="User" />
                        <div className="reviewer__name">{user.name}</div>
                    </div>
                </div>

                {!showSubmitForm && (
                    <div className="reviewer__pages">
                        <div
                            className={`reviewer__page-button ${activeTab === 'info' ? 'active' : ''}`}
                            onClick={() => handleTabChange('info')}
                        >
                            Profile
                        </div>
                        <div
                            className={`reviewer__page-button ${activeTab === 'progress' ? 'active' : ''}`}
                            onClick={() => handleTabChange('progress')}
                        >
                            In Progress reviews
                        </div>
                        <div
                            className={`reviewer__page-button ${activeTab === 'completed' ? 'active' : ''}`}
                            onClick={() => handleTabChange('completed')}
                        >
                            Completed Reviews
                        </div>
                    </div>
                )}

                <div className="reviewer__main">
                    {showSubmitForm ? (
                        <ReviewerSubmit user={user} onClose={handleCloseSubmit} />
                    ) : (
                        <>
                            {activeTab === 'info' && <ReviewerInfo user={user} />}
                            {activeTab === 'progress' && (
                                <ReviewerProgress onReviewClick={handleReviewClick} reviews={reviews} />
                            )}
                            {activeTab === 'completed' && (
                                <ReviewerCompleted onReviewClick={handleReviewClick} />
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
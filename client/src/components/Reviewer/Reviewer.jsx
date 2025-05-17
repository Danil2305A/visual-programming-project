import { useState } from 'react';
import ReviewerInfo from './ReviewerInfo';
import ReviewerProgress from './ReviewerProgress';
import ReviewerCompleted from './ReviewerCompleted';
import ReviewerSubmit from './ReviewerSubmit';

export default function Reviewer() {
    const [activeTab, setActiveTab] = useState('info');
    const [showSubmitForm, setShowSubmitForm] = useState(false);

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
                        <div className="reviewer__name">John Smith</div>
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
                        <ReviewerSubmit onClose={handleCloseSubmit} />
                    ) : (
                        <>
                            {activeTab === 'info' && <ReviewerInfo />}
                            {activeTab === 'progress' && (
                                <ReviewerProgress onReviewClick={handleReviewClick} />
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
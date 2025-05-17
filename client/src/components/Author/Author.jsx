import { useState } from 'react';
import AuthorInfo from './AuthorInfo';
import AuthorArticles from './AuthorArticles';
import AuthorSubmit from './AuthorSubmit';
import AuthorReview from './AuthorReview';

export default function Author() {
    const [activeTab, setActiveTab] = useState('info');

    const renderTab = () => {
        switch(activeTab) {
            case 'info': return <AuthorInfo />;
            case 'articles': return <AuthorArticles />;
            case 'submit': return <AuthorSubmit />;
            case 'review': return <AuthorReview />;
            default: return <AuthorInfo />;
        }
    };

    return (
        <div className="author">
            <div className="content">
                <div className="author__header">
                    <picture className="author__photo">
                        <img src="images/iconUser.svg" className="author__image" alt=""></img>
                    </picture>
                    <div className="author__title">
                        <div className="author__name">John Doe</div>
                        <div className="author__role">Technology writer</div>
                    </div>
                </div>
                <div className="author__pages">
                    <div
                        className={`author__page-button ${activeTab === 'info' ? 'active' : ''}`}
                        onClick={() => setActiveTab('info')}
                    >
                        Profile
                    </div>
                    <div
                        className={`author__page-button ${activeTab === 'articles' ? 'active' : ''}`}
                        onClick={() => setActiveTab('articles')}
                    >
                        My Articles
                    </div>
                    <div
                        className={`author__page-button ${activeTab === 'submit' ? 'active' : ''}`}
                        onClick={() => setActiveTab('submit')}
                    >
                        Submit Article
                    </div>
                    <div
                        className={`author__page-button ${activeTab === 'review' ? 'active' : ''}`}
                        onClick={() => setActiveTab('review')}
                    >
                        Review Articles
                    </div>
                </div>
                <div className="author__main">
                    {renderTab()}
                </div>
            </div>
        </div>
    );
}
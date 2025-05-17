import { useState } from 'react';
import ArticleDetail from '../Common/ArticleDetail';

export default function ArticleItem1({ article }) {
    const [showDetail, setShowDetail] = useState(false);

    return (
        <>
            <div className="articles__article">
                <div className="articles__article-header">
                    <img src="/images/iconUser.svg" className="articles__article-image" alt="" />
                    <div className="articles__article-info">
                        <div className="articles__article-title">{article.title}</div>
                        <div className="articles__article-author">{article.author}</div>
                    </div>
                </div>
                <div className="articles__article-helpers">
                    <div className="articles__article-date">Submitted: {article.date}</div>
                    <div className="articles__article-tags">{article.tags}</div>
                </div>
                <div className="articles__article-status">{article.status}</div>
                <div
                    className="articles__article-details"
                    onClick={() => setShowDetail(true)}
                >
                    Show Details
                </div>
            </div>
            {showDetail && (
                <ArticleDetail
                    article={article}
                    onClose={() => setShowDetail(false)}
                />
            )}
        </>
    );
}
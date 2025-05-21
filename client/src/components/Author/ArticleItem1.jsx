import { useState, useEffect } from 'react';
import ArticleDetail from '../Common/ArticleDetail';
import axios from 'axios';
import { SERVER_URL } from '../../utils/fileUtils';

export default function ArticleItem1({ article, review }) {
    const [showDetail, setShowDetail] = useState(false);
    const [user_name, setUserName] = useState('');

    useEffect(() => {
        try {
            const send = async () => {
                setUserName((await axios.get(`${SERVER_URL}/useres/${article.userId}`)).data.name);
            };
            send();
        } catch (err) {
            console.error(err);
        }
    }, [setUserName]);

    return (
        <>
            <div className="articles__article">
                <div className="articles__article-header">
                    <img src="/images/iconUser.svg" className="articles__article-image" alt="" />
                    <div className="articles__article-info">
                        <div className="articles__article-title">{article.title}</div>
                        <div className="articles__article-author">{user_name}</div>
                    </div>
                </div>
                <div className="articles__article-helpers">
                    <div className="articles__article-date">Submitted: {review.createdAt}</div>
                    <div className="articles__article-tags">{article.tags}</div>
                </div>
                {/*<div className="articles__article-status">{article.status}</div>*/}
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
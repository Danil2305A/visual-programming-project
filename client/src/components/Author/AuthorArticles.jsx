import { useState, useEffect } from 'react';
import ArticleItem from './ArticleItem';
import axios from 'axios';
import { SERVER_URL } from '../../utils/fileUtils';

export default function AuthorArticles({ user }) {
    const [articles, setArticles] = useState([]);
    const [filter, setFilter] = useState('All Articles');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        try {
            const send = async () => {
                let all_articles = (await axios.get(`${SERVER_URL}/articles`)).data;

                let user_articles = [];
                for (let article of all_articles) {
                    if (article.userId === user.id) {
                        user_articles.push(article);
                    }
                }
                setArticles(user_articles);
            };
            send();
        } catch (err) {
            console.error(err);
        }
    }, [setArticles]);

    return (
        <div className="author__articles">
            <div className="author__review-header">
                <div className="author__review-title">My articles</div>
                <div className="author__review-sort">
                    <select className="input__text sv" value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All Articles">All Articles</option>
                        <option value="Pending Review">Pending Review</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Reviewed">Reviewed</option>
                    </select>
                    <input
                        type="text" className="input__text sv"
                        placeholder="Search Articles"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
            <div className="author__review-main">
                <div className="articles">
                    <div className="articles__main">
                        {articles.map(article => (
                            <ArticleItem article={article} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
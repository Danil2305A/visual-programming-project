import { useState } from 'react';
import ArticleItem from './ArticleItem';

export default function AuthorArticles() {
    const [articles, setArticles] = useState([
        { id: 1, title: 'Article 1', author: 'Authodr 1', date: 'May 2, 2025', tags: 'Environment', status: 'Pending Review' },
        { id: 2, title: 'Article 1', author: 'Authasor 1', date: 'May 2, 2025', tags: 'Environment', status: 'Pending Review' },
        { id: 4, title: 'Article 1', author: 'Authosdfr 1', date: 'May 2, 2025', tags: 'Environment', status: 'Pending Review' },
        { id: 3, title: 'Article 1', author: 'Authosr 1', date: 'May 2, 2025', tags: 'Environment', status: 'Pending Review' },
        { id: 5, title: 'Article 1', author: 'Authogr 1', date: 'May 2, 2025', tags: 'Environment', status: 'Pending Review' },
        { id: 6, title: 'Article 1', author: 'Authgor 1', date: 'May 2, 2025', tags: 'Environment', status: 'Pending Review' },
    ]);
    const [filter, setFilter] = useState('All Articles');
    const [searchQuery, setSearchQuery] = useState('');

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
                            <ArticleItem key={article.id} article={article} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
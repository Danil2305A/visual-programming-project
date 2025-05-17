import ArticleItem from '../Author/ArticleItem';

export default function AdminArticles() {
    const articles = [
        { id: 1, title: 'Article 1', author: 'Author 1', date: 'May 2, 2025', tags: 'Environment', status: 'Pending Review' },
    ];

    return (
        <div className="admin__db-articles">
            <div className="admin__db-articles-title">Articles</div>
            <div className="admin__dbs-articles-main">
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
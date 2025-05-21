import { useState, useEffect } from 'react';
import ArticleItem from '../Author/ArticleItem';
import axios from 'axios';
import { SERVER_URL } from '../../utils/fileUtils';

export default function AdminArticles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        try {
            const send = async () => {
                setArticles((await axios.get(`${SERVER_URL}/articles`)).data);
            };
            send();
        } catch (err) {
            console.error(err);
        }
    }, [setArticles]);

    return (
        <div className="admin__db-articles">
            <div className="admin__db-articles-title">Articles</div>
            <div className="admin__dbs-articles-main">
                <div className="articles">
                    <div className="articles__main">
                        {articles.map(article => (
                            <ArticleItem key={article.id} article={article}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default function ArticleDetail({ article, onClose }) {
    return (
        <div className="detail">
            <div className="detail__wrapper">
                <div className="detail__cross" onClick={onClose}></div>
                <div className="detail__author">{article.author}</div>
                <div className="detail__title">{article.title}</div>
                <div className="detail__file"></div>
            </div>
        </div>
    );
}
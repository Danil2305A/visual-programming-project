import React, { useState, useEffect } from 'react';
import ArticleItem1 from './ArticleItem1';

export default function AuthorReview() {
    const [articles] = useState([
        {
            id: 1,
            title: 'Hernya 3kakaya-to',
            author: 'Dibil kakoy-to',
            date: 'May 2, 2025',
            tags: 'Environment',
            status: 'Pending Review'
        },
        {
            id: 2,
            title: 'Hernya kakaya-to',
            author: 'Dibil kakoy-to',
            date: 'May 2, 2025',
            tags: 'Environment',
            status: 'Pending Review'
        },
        {
            id: 3,
            title: 'Hernya kakaya-to',
            author: 'Dibil kakoy-to',
            date: 'May 2, 2025',
            tags: 'Environment',
            status: 'Pending Review'
        },
        {
            id: 4,
            title: 'Hernya kakaya-to',
            author: 'Dibil kakoy-to',
            date: 'May 2, 2025',
            tags: 'Environment',
            status: 'Pending Review'
        },
        {
            id: 5,
            title: 'Hernya kakay3a-to',
            author: 'Dibil kakoy-to',
            date: 'May 2, 2025',
            tags: 'Environment',
            status: 'Pending Review'
        },
        {
            id: 6,
            title: 'Hernya kakaya-to',
            author: 'Dibil kakoy-to',
            date: 'May 2, 2025',
            tags: 'Environment',
            status: 'Pending Review'
        },
        {
            id: 61346,
            title: 'Hernya 3kakaya-to',
            author: 'Dibil kakoy-to',
            date: 'May 2, 2025',
            tags: 'Environment',
            status: 'Pending Review'
        },
        {
            id: 3453452,
            title: 'Hernya kakaya-to',
            author: 'Dibil kakoy-to',
            date: 'May 2, 2025',
            tags: 'Environment',
            status: 'Pending Review'
        },
        {
            id: 3453453,
            title: 'Hernya kakaya-to',
            author: 'Dibil kakoy-to',
            date: 'May 2, 2025',
            tags: 'Environment',
            status: 'Pending Review'
        },
        {
            id: 4345345,
            title: 'Hernya kakaya-to',
            author: 'Dibil kakoy-to',
            date: 'May 2, 2025',
            tags: 'Environment',
            status: 'Pending Review'
        },
        {
            id: 5345345,
            title: 'Hernya kakay3a-to',
            author: 'Dibil kakoy-to',
            date: 'May 2, 2025',
            tags: 'Environment',
            status: 'Pending Review'
        },
        {
            id: 63453455,
            title: 'Hernya kakaya-to',
            author: 'Dibil kakoy-to',
            date: 'May 2, 2025',
            tags: 'Environment',
            status: 'Pending Review'
        },
        {
            id: 1234,
            title: 'Hernya 3kakaya-to',
            author: 'Dibil kakoy-to',
            date: 'May 2, 2025',
            tags: 'Environment',
            status: 'Pending Review'
        },
        {
            id: 222,
            title: 'Hernya kakaya-to',
            author: 'Dibil kakoy-to',
            date: 'May 2, 2025',
            tags: 'Environment',
            status: 'Pending Review'
        },
        {
            id: 3233,
            title: 'Hernya kakaya-to',
            author: 'Dibil kakoy-to',
            date: 'May 2, 2025',
            tags: 'Environment',
            status: 'Pending Review'
        },
        {
            id: 434,
            title: 'Hernya kakaya-to',
            author: 'Dibil kakoy-to',
            date: 'May 2, 2025',
            tags: 'Environment',
            status: 'Pending Review'
        },
        {
            id: 754,
            title: 'Hernya kakay3a-to',
            author: 'Dibil kakoy-to',
            date: 'May 2, 2025',
            tags: 'Environment',
            status: 'Pending Review'
        },
        {
            id: 68,
            title: 'Hernya kakaya-to',
            author: 'Dibil kakoy-to',
            date: 'May 2, 2025',
            tags: 'Environment',
            status: 'Pending Review'
        },
        {
            id: 18,
            title: 'Hernya 3kakaya-to',
            author: 'Dibil kakoy-to',
            date: 'May 2, 2025',
            tags: 'Environment',
            status: 'Pending Review'
        },
        {
            id: 27,
            title: 'Hernya kakaya-to',
            author: 'Dibil kakoy-to',
            date: 'May 2, 2025',
            tags: 'Environment',
            status: 'Pending Review'
        },
        {
            id: 36,
            title: 'Hernya kakaya-to',
            author: 'Dibil kakoy-to',
            date: 'May 2, 2025',
            tags: 'Environment',
            status: 'Pending Review'
        },
        {
            id: 45,
            title: 'Hernya kakaya-to',
            author: 'Dibil kakoy-to',
            date: 'May 2, 2025',
            tags: 'Environment',
            status: 'Pending Review'
        },
        {
            id: 12,
            title: 'Hernya kakay3a-to',
            author: 'Dibil kakoy-to',
            date: 'May 2, 2025',
            tags: 'Environment',
            status: 'Pending Review'
        },
        {
            id: 2323,
            title: 'Hernya kakaya-to',
            author: 'Dibil kakoy-to',
            date: 'May 2, 2025',
            tags: 'Environment',
            status: 'Pending Review'
        },
    ]);
    const [filter, setFilter] = useState('All Articles');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const [displayedArticles, setDisplayedArticles] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    useEffect(() => {
        const filtered = articles.filter(article => {
            const matchesFilter = filter === 'All Articles' || article.status === filter;
            const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                article.author.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesFilter && matchesSearch;
        });
        const total = Math.ceil(filtered.length / itemsPerPage);
        setTotalPages(total);
        if (currentPage > total && total > 0) {
            setCurrentPage(total);
        }
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setDisplayedArticles(filtered.slice(startIndex, endIndex));
    }, [articles, filter, searchQuery, currentPage, itemsPerPage]);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    const renderPagination = () => {
        const pages = [];
        pages.push(
            <div
                key="prev"
                className={`articles__page ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={() => handlePageChange(currentPage - 1)}
            >
                ←
            </div>
        );

        pages.push(
            <div
                key={1}
                className={`articles__page ${currentPage === 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(1)}
            >
                1
            </div>
        );

        if (currentPage <= 3) {
            for (let i = 2; i <= Math.min(5, totalPages); i++) {
                pages.push(
                    <div
                        key={i}
                        className={`articles__page ${currentPage === i ? 'active' : ''}`}
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </div>
                );
            }

            if (totalPages > 5) {
                pages.push(<div key="ellipsis1" className="articles__page ellipsis">...</div>);
                if (currentPage <= 3) {
                    pages.push(
                        <div
                            key={totalPages}
                            className={`articles__page ${currentPage === totalPages ? 'active' : ''}`}
                            onClick={() => handlePageChange(totalPages)}
                        >
                            {totalPages}
                        </div>
                    );
                }
            }
        } else if (currentPage >= totalPages - 2) {
            pages.push(<div key="ellipsis2" className="articles__page ellipsis">...</div>);
            for (let i = totalPages - 4; i < totalPages; i++) {
                if (i > 1) {
                    pages.push(
                        <div
                            key={i}
                            className={`articles__page ${currentPage === i ? 'active' : ''}`}
                            onClick={() => handlePageChange(i)}
                        >
                            {i}
                        </div>
                    );
                }
            }
            pages.push(
                <div
                    key={totalPages}
                    className={`articles__page ${currentPage === totalPages ? 'active' : ''}`}
                    onClick={() => handlePageChange(totalPages)}
                >
                    {totalPages}
                </div>
            );
        } else {
            pages.push(<div key="ellipsis3" className="articles__page ellipsis">...</div>);
            pages.push(
                <div
                    key={currentPage - 1}
                    className="articles__page"
                    onClick={() => handlePageChange(currentPage - 1)}
                >
                    {currentPage - 1}
                </div>
            );
            pages.push(
                <div
                    key={currentPage}
                    className="articles__page active"
                    onClick={() => handlePageChange(currentPage)}
                >
                    {currentPage}
                </div>
            );
            pages.push(
                <div
                    key={currentPage + 1}
                    className="articles__page"
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    {currentPage + 1}
                </div>
            );
            pages.push(<div key="ellipsis4" className="articles__page ellipsis">...</div>);
            pages.push(
                <div
                    key={totalPages}
                    className="articles__page"
                    onClick={() => handlePageChange(totalPages)}
                >
                    {totalPages}
                </div>
            );
        }
        pages.push(
            <div
                key="next"
                className={`articles__page ${currentPage === totalPages ? 'disabled' : ''}`}
                onClick={() => handlePageChange(currentPage + 1)}
            >
                →
            </div>
        );

        return pages;
    };

    return (
        <div className="author__review">
            <div className="author__review-header">
                <div className="author__review-title">Articles Under Review</div>
                <div className="author__review-sort">
                    <select
                        className="input__text sv"
                        value={filter}
                        onChange={(e) => {
                            setFilter(e.target.value);
                            setCurrentPage(1);
                        }}
                    >
                        <option value="All Articles">All Articles</option>
                        <option value="Pending Review">Pending Review</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Reviewed">Reviewed</option>
                    </select>
                    <input
                        className="input__text sv"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setCurrentPage(1);
                        }}
                        placeholder="Search Articles"
                    />
                </div>
            </div>
            <div className="author__review-main">
                <div className="articles">
                    <div className="articles__main">
                        {displayedArticles.map(article => (
                            <ArticleItem1 key={article.id} article={article} />
                        ))}
                    </div>
                    <div className="articles__pagination">
                        {renderPagination()}
                    </div>
                </div>
            </div>
        </div>
    );
}
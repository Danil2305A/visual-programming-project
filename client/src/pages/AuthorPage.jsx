import Author from '../components/Author/Author';

export default function AuthorPage({ user }) {
    return (
        <div className="author-page">
            <Author user={user} />
        </div>
    );
}
import Reviewer from '../components/Reviewer/Reviewer';

export default function ReviewerPage({ user }) {
    return (
        <div className="reviewer-page">
            <Reviewer user={user} />
        </div>
    );
}
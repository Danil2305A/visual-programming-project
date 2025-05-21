import Admin from '../components/Admin/Admin';

export default function AdminPage({ user }) {
    return (
        <div className="admin-page">
            <Admin user={user} />
        </div>
    );
}
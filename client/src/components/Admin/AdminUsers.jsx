import AdminUserRow from './AdminUserRow';

export default function AdminUsers({ setShowAddUser }) {
    const users = [
        { id: 1, name: 'John Doe', role: 'Author', status: 'Active' },
        { id: 2, name: 'Jane Smith', role: 'Reviewer', status: 'Active' }
    ];

    return (
        <div className="admin__db-users">
            <div className="admin__db-users-title">User Management</div>
            <div className="admin__db-users-search">
                <input className="input__text" style={{width: '400px'}} type="text" placeholder="Users" />
                <button className="button button_primary" onClick={() => setShowAddUser(true)}>
                    Add New User
                </button>
            </div>
            <div className="admin__db-users-columns">
                <div className="admin__db-users-column">User</div>
                <div className="admin__db-users-column">Role</div>
                <div className="admin__db-users-column">Status</div>
                <div className="admin__db-users-column">Actions</div>
            </div>
            {users.map(user => (
                <AdminUserRow key={user.id} user={user} />
            ))}
        </div>
    );
}
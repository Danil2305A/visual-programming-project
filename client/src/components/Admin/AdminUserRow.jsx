import { useState } from 'react';

export default function AdminUserRow({ user }) {
    const [currentRole, setCurrentRole] = useState(user.role);
    const [status, setStatus] = useState(user.status);

    const handleBlock = () => {
        setStatus(status === 'Active' ? 'Blocked' : 'Active');
    };

    return (
        <div className="admin__db-users-user">
            <div className="admin__db-users-user-name">{user.name}</div>
            <div className="admin__db-users-user-role">
                <select className="input__text" value={currentRole} onChange={(e) => setCurrentRole(e.target.value)}>
                    <option value="Author">Author</option>
                    <option value="Reviewer">Reviewer</option>
                    <option value="Admin">Admin</option>
                </select>
            </div>
            <div className="admin__db-users-user-status">{status}</div>
            <div className="admin__db-users-user-block" onClick={handleBlock}>
                {status === 'Active' ? 'Block' : 'Unblock'}
            </div>
        </div>
    );
}
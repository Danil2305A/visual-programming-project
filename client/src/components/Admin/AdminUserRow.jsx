import { useState } from 'react';

export default function AdminUserRow({ user, setRole }) {
    //const [currentRole, setCurrentRole] = useState(user.role);

    return (
        <div className="admin__db-users-user">
            <div className="admin__db-users-user-name">{user.name}</div>
            <div className="admin__db-users-user-role">
                <select className="input__text" value={user.role} onChange={(e) => setRole(user.id, e.target.value)}>
                    <option value="author">Author</option>
                    <option value="reviewer">Reviewer</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
        </div>
    );
}
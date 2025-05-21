import { useState, useEffect } from 'react';
import AdminUserRow from './AdminUserRow';
import axios from 'axios';
import { SERVER_URL } from '../../utils/fileUtils';

export default function AdminUsers({ user }) {
    const [users, setUsers] = useState([]);

    const send = async () => {
        const all_users = (await axios.get(`${SERVER_URL}/users`)).data;
        let users = [];
        for (let another_user of all_users) {
            if (another_user.id !== user.id) {
                users.push(another_user);
            }
        }
        setUsers(users);
    };

    useEffect(() => {
        try {
            send();
        } catch (err) {
            console.error(err);
        }
    }, [setUsers]);

    const setRole = (userId, newRole) => {
        try {
            axios.put(`${SERVER_URL}/users/${userId}/role`, { role: newRole });
            send();
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="admin__db-users">
            <div className="admin__db-users-title">User Management</div>
            <div className="admin__db-users-search">
                <input className="input__text" style={{ width: '400px' }} type="text" placeholder="Users" />
            </div>
            <div className="admin__db-users-columns">
                <div className="admin__db-users-column">User name</div>
                <div className="admin__db-users-column">Role</div>
            </div>
            {users.map(user => (
                <AdminUserRow key={user.id} user={user} setRole={setRole} />
            ))}
        </div>
    );
}
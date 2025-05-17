import { useState } from 'react';
import AdminUsers from './AdminUsers';
import AdminArticles from './AdminArticles';
import AdminAddNewUser from './AdminAddNewUser';

export default function Admin() {
    const [activeTab, setActiveTab] = useState('users');
    const [showAddUser, setShowAddUser] = useState(false);

    return (
        <div className="admin">
            <div className="admin__header">
                <div className="admin__title">
                    Admin Dashboard
                </div>
                <div className="admin__title-info">
                    <picture className="admin__notice">
                        <img src="/images/iconNotice.svg" className="admin__image" alt=""></img>
                    </picture>
                    <picture className="admin__photo">
                        <img src="/images/iconUser.svg" className="admin__image" alt=""></img>
                    </picture>
                    <div className="admin__name">John Smith</div>
                </div>
            </div>
            <div className="admin__main">
                <div className="admin__dbs">
                    <div
                        className={`admin__dbs-users ${activeTab === 'users' ? 'active' : ''}`}
                        onClick={() => setActiveTab('users')}
                    >
                        User Management
                    </div>
                    <div
                        className={`admin__dbs-articles ${activeTab === 'articles' ? 'active' : ''}`}
                        onClick={() => setActiveTab('articles')}
                    >
                        Articles
                    </div>
                </div>

                {!showAddUser ? (
                    <div className="admin__db">
                        {activeTab === 'users' ? <AdminUsers setShowAddUser={setShowAddUser} /> : <AdminArticles />}
                    </div>
                ) : (
                    <AdminAddNewUser setShowAddUser={setShowAddUser} />
                )}
            </div>
        </div>
    );
}
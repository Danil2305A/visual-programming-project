import { useState } from 'react';
import AdminUsers from './AdminUsers';
import AdminArticles from './AdminArticles';
import AdminAddNewUser from './AdminAddNewUser';

export default function Admin({ user }) {
    const [activeTab, setActiveTab] = useState('users');

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
                    <div className="admin__name">user.name</div>
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
                <div className="admin__db">
                    {activeTab === 'users' ? <AdminUsers user={user} /> : <AdminArticles user={user} />}
                </div>
            </div>
        </div>
    );
}
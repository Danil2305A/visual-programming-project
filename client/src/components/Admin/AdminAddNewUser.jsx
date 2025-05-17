import React, { useState } from 'react';
export default function AdminAddNewUser({ setShowAddUser }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: 'Author'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Логика субмита
        setShowAddUser(false);
    };

    return (
        <div className="admin__add-new">
            <div className="admin__add-new-card-title">Add New User</div>
            <div className="admin__add-new-card">
                <div className="input">
                    <div className="input__title">Full name</div>
                    <input className="input__text" type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="input">
                    <div className="input__title">Email</div>
                    <input className="input__text" type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="input">
                    <div className="input__title">Role</div>
                    <select className="input__text" name="role" value={formData.role} onChange={handleChange}>
                        <option value="Author">Author</option>
                        <option value="Reviewer">Reviewer</option>
                        <option value="Admin">Admin</option>
                    </select>
                </div>
                <div className="admin__add-new-card-buttons">
                    <button className="button button_secondary" onClick={() => setShowAddUser(false)}>Cancel</button>
                    <button className="button button_primary" onClick={handleSubmit}>Create User</button>
                </div>
            </div>
        </div>
    );
}
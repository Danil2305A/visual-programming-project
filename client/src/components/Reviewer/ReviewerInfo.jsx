import React, { useState } from 'react';
export default function ReviewerInfo({ user }) {
    const [profile, setProfile] = useState({
        name: user.name,
        email: user.email,
        specialization: user.specialization,
        location: user.location
    });

    const stats = {
        total: 12,
        progress: 3,
        completed: 9
    };

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <div className="reviewer__info active">
                <div className="reviewer__info-title">Personal Information</div>
                <div className="input input_small">
                    <div className="input__title">Full Name</div>
                    <input
                        className="input__text"
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                        placeholder="Full name"
                    />
                </div>
                <div className="input input_small">
                    <div className="input__title">Email</div>
                    <input className="input__text"
                        type="text"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                </div>
                <div className="input input_small">
                    <div className="input__title">Specialization</div>
                    <input className="input__text"
                        type="text"
                        name="specialization"
                        value={profile.specialization}
                        onChange={handleChange}
                        placeholder="Specialization"
                    />
                </div>
                <div className="input input_small">
                    <div className="input__title">Location</div>
                    <input className="input__text"
                        type="text"
                        name="location"
                        value={profile.location}
                        onChange={handleChange}
                        placeholder="Location"
                    />
                </div>
            </div>
            <div className="reviewer__info active">
                <div className="reviewer__info-title">Review Statistics</div>
                <div className="reviewer__statistics">
                    {/*<div className="reviewer__statistic">*/}
                    {/*    <div className="reviewer__statistic-num">{stats.total}</div>*/}
                    {/*    <div className="reviewer__statistic-title">Total Reviews</div>*/}
                    {/*</div>*/}
                    {/*<div className="reviewer__statistic">*/}
                    {/*    <div className="reviewer__statistic-num">{stats.progress}</div>*/}
                    {/*    <div className="reviewer__statistic-title">In progress</div>*/}
                    {/*</div>*/}
                    {/*<div className="reviewer__statistic">*/}
                    {/*    <div className="reviewer__statistic-num">{stats.completed}</div>*/}
                    {/*    <div className="reviewer__statistic-title">Completed</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    );
}
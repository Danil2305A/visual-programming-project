import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { SERVER_URL } from '../../utils/fileUtils';
import axios from 'axios';

export default function Registration({ setIsLogin, setUser }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        specialization: '',
        location: ''
    });
    const { login } = useAuth();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();

        // Логика регистрации
        try {
            axios.post(`${SERVER_URL}/users`, {
                email: formData.email,
                password: formData.password,
                name: formData.name,
                specialization: formData.specialization,
                location: formData.location,
            }).then(res => setUser(res.data));
            login({ email: formData.email });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="registration">
            <div className="input">
                <div className="input__title">Email</div>
                <input className="input__text"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
            </div>
            <div className="input">
                <div className="input__title">Password</div>
                <input className="input__text"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
            </div>
            <div className="input">
                <div className="input__title">Name</div>
                <input className="input__text"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                />
            </div>
            <div className="input">
                <div className="input__title">Specification</div>
                <input className="input__text"
                    type="text"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    placeholder="Specification"
                />
            </div>
            <div className="input">
                <div className="input__title">Location</div>
                <input className="input__text"
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Location"
                />
            </div>
            <div className="registration__buttons">
                <button className="button button_primary" onClick={handleRegister}>Registration</button>
                <button className="button button_secondary" onClick={() => setIsLogin(true)}>Log in</button>
            </div>
        </div>
    );
}
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function Registration({ setIsLogin, setRole }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        specification: '',
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
        login({ email: formData.email });
        setRole('author');
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
                    name="specification"
                    value={formData.specification}
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
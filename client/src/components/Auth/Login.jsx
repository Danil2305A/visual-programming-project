import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import { SERVER_URL } from '../../utils/fileUtils';

export default function Login({ setIsLogin, setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();

        // Логика аутефикации
        try {
            axios.get(`${SERVER_URL}/users/${email}/${password}`)
                .then(res => setUser(res.data));
            login({ email });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="entry">
            <div className="input">
                <div className="input__title">Email</div>
                <input className="input__text"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
            </div>
            <div className="input">
                <div className="input__title">Password</div>
                <input className="input__text"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
            </div>
            <div className="registration__buttons">
                <button className="button button_primary" onClick={handleLogin}>Log in</button>
                <button className="button button_secondary" onClick={() => setIsLogin(false)}>Registration</button>
            </div>
        </div>
    );
}
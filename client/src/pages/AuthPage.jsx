import { useState } from 'react';
import Login from '../components/Auth/Login';
import Registration from '../components/Auth/Registration';

export default function AuthPage({ setUser }) {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="auth-page">
            {isLogin ?
                <Login setIsLogin={setIsLogin} setUser={setUser} /> :
                <Registration setIsLogin={setIsLogin} setUser={setUser} />
            }
        </div>
    );
}
import { useState } from 'react';
import Login from '../components/Auth/Login';
import Registration from '../components/Auth/Registration';

export default function AuthPage({ setRole }) {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="auth-page">
            {isLogin ?
                <Login setIsLogin={setIsLogin} setRole={setRole} /> :
                <Registration setIsLogin={setIsLogin} setRole={setRole} />
            }
        </div>
    );
}
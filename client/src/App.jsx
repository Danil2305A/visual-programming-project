import { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import AuthPage from './pages/AuthPage';
import AdminPage from './pages/AdminPage';
import AuthorPage from './pages/AuthorPage';
import ReviewerPage from './pages/ReviewerPage';

function App() {
    const [user, setUser] = useState(null);

    const renderPage = () => {
        if (user == null)
            return <AuthPage setUser={setUser} />;
        switch (user.role) {
            case 'admin': return <AdminPage user={user} />;
            case 'author': return <AuthorPage user={user} />;
            case 'reviewer': return <ReviewerPage user={user} />;
            default: return <AuthPage setUser={setUser} />;
        }
    };

    return (
        <AuthProvider>
            <div className="app">
                {renderPage()}
            </div>
        </AuthProvider>
    );
}

export default App;

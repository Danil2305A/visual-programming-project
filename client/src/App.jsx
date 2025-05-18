import { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import AuthPage from './pages/AuthPage';
import AdminPage from './pages/AdminPage';
import AuthorPage from './pages/AuthorPage';
import ReviewerPage from './pages/ReviewerPage';

function App() {
    const [role, setRole] = useState(null);

    const renderPage = () => {
        switch(role) {
            case 'admin': return <AdminPage />;
            case 'author': return <AuthorPage />;
            case 'reviewer': return <ReviewerPage />;
            default: return <AuthPage setRole={setRole} />;
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

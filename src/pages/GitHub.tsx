import { useState } from 'react';
import GitHubUserCard from '../components/GitHubUserCard';
import './GitHub.css';

interface GitHubUser {
    avatar_url: string;
    name: string;
    login: string;
    bio: string | null;
    location: string | null;
    followers: number;
    public_repos: number;
}

const GitHub = () => {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState<GitHubUser | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        if (!username.trim()) {
            setError('Please enter a username');
            return;
        }

        setLoading(true);
        setError('');
        setUser(null);

        try {
            const response = await fetch(`https://api.github.com/users/${username.trim()}`);

            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error('User not found');
                }
                throw new Error('Failed to fetch user data');
            }

            const userData: GitHubUser = await response.json();
            setUser(userData);
        } catch (err: any) {
            setError(err.message || 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="github">
            <div className="github-container">
                <h1>GitHub User Search</h1>

                <div className="search-section">
                    <div className="search-input-container">
                        <input
                            type="text"
                            placeholder="Enter GitHub username..."
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onKeyUp={handleKeyPress}
                            className="search-input"
                        />
                        <button
                            onClick={handleSearch}
                            disabled={loading}
                            className="search-button"
                        >
                            {loading ? 'Searching...' : 'Search'}
                        </button>
                    </div>
                </div>

                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}

                {loading && (
                    <div className="loading">
                        <div className="spinner"></div>
                        <p>Loading user data...</p>
                    </div>
                )}

                {user && <GitHubUserCard user={user} />}
            </div>
        </div>
    );
};

export default GitHub; 
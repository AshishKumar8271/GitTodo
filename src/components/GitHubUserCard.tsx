import './GitHubUserCard.css';

interface GitHubUser {
    avatar_url: string;
    name: string;
    login: string;
    bio: string | null;
    location: string | null;
    followers: number;
    public_repos: number;
}

interface GitHubUserCardProps {
    user: GitHubUser;
}

const GitHubUserCard = ({ user }: GitHubUserCardProps) => {
    return (
        <div className="user-card">
            <div className="user-header">
                <img
                    src={user.avatar_url}
                    alt={`${user.name || user.login}'s avatar`}
                    className="user-avatar"
                />
                <div className="user-info">
                    <h2 className="user-name">{user.name || user.login}</h2>
                    <p className="user-username">@{user.login}</p>
                    {user.bio && <p className="user-bio">{user.bio}</p>}
                </div>
            </div>

            <div className="user-details">
                {user.location && (
                    <div className="detail-item">
                        <span className="detail-label">📍 Location:</span>
                        <span className="detail-value">{user.location}</span>
                    </div>
                )}

                <div className="detail-item">
                    <span className="detail-label">👥 Followers:</span>
                    <span className="detail-value">{user.followers.toLocaleString()}</span>
                </div>

                <div className="detail-item">
                    <span className="detail-label">📦 Public Repositories:</span>
                    <span className="detail-value">{user.public_repos.toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
};

export default GitHubUserCard; 
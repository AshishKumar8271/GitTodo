import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home">
            <div className="home-container">
                <h1>Welcome to My React App</h1>
                <div className="button-container">
                    <button
                        className="nav-button todo-button"
                        onClick={() => navigate('/todo')}
                    >
                        To-Do
                    </button>
                    <button
                        className="nav-button github-button"
                        onClick={() => navigate('/github')}
                    >
                        GitHub
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home; 
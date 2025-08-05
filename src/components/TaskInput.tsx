import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/todoSlice';
import './TaskInput.css';

const TaskInput = () => {
    const [taskDescription, setTaskDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (taskDescription.trim()) {
            dispatch(addTask(taskDescription.trim()));
            setTaskDescription('');
        }
    };

    return (
        <form className="task-input" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter task..."
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                className="task-input-field"
            />
            <button type="submit" className="save-button">
                Save Task
            </button>
        </form>
    );
};

export default TaskInput; 
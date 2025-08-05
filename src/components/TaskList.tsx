import { useDispatch } from 'react-redux';
import { deleteTask } from '../store/todoSlice';
import './TaskList.css';

interface Task {
    id: string;
    description: string;
}

interface TaskListProps {
    tasks: Task[];
}

const TaskList = ({ tasks }: TaskListProps) => {
    const dispatch = useDispatch();

    const handleDelete = (taskId: string) => {
        dispatch(deleteTask(taskId));
    };

    if (tasks.length === 0) {
        return (
            <div className="task-list">
                <p className="no-tasks">No tasks yet. Add your first task above!</p>
            </div>
        );
    }

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <div key={task.id} className="task-card">
                    <p className="task-description">{task.description}</p>
                    <button
                        className="delete-button"
                        onClick={() => handleDelete(task.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default TaskList; 
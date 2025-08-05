import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import './Todo.css';

const Todo = () => {
    const tasks = useSelector((state: RootState) => state.todo.tasks);

    return (
        <div className="todo">
            <div className="todo-container">
                <h1>To-Do Application</h1>
                <TaskInput />
                <TaskList tasks={tasks} />
            </div>
        </div>
    );
};

export default Todo; 
import { useNavigate } from 'react-router-dom';
import { useRequestTodo } from '../../hooks/use-request-todo.js';
import { TaskLayout } from './TaskLayout.js';
import { onDelete } from '../../handlers/onDelete.js';
import { onChangeContent } from '../../handlers/onChangeContent.js';

export const TaskContainer = (props) => {
	const { setTodos, refreshTodos, setRefreshTodos, setChangeContent, setId } = props;
	const { title, id } = useRequestTodo();
	const navigate = useNavigate();
	const handlerDelete = () => {
		return onDelete(id, setTodos, refreshTodos, setRefreshTodos, navigate);
	};
	const handlerChangeContent = () => {
		return onChangeContent(id, setChangeContent, setId, navigate);
	};
	const stepDown = () => navigate(-1);
	const state = {
		title,
		handlerDelete,
		handlerChangeContent,
		stepDown,
	};

	return <TaskLayout {...state} />;
};

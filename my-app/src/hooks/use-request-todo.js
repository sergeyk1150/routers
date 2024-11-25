import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const useRequestTodo = () => {
	const [title, setTitle] = useState();
	const { id } = useParams();
	useEffect(() => {
		fetch(`http://localhost:3003/todos/${id}`)
			.then((responce) => responce.json())
			.then((todo) => {
				setTitle(todo.title);
			});
	}, [id]);
	return { title, id };
};

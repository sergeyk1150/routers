import { useState, useEffect } from 'react';
import { getLoadedTodosOrFilteredTodos } from '../utils/getLoadedTodosOrFilteredTodos';

export const useRequestAllTodos = (refreshTodos) => {
	const [isLoading, setIsLoading] = useState(false);
	const [todos, setTodos] = useState([]);
	const [sortFlag, setSortFlag] = useState(false);
	const [searchFlag, setSearchFlag] = useState(false);
	const [searchContent, setSearchContent] = useState('');

	useEffect(() => {
		setIsLoading(true);
		fetch('http://localhost:3003/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => {
				setTodos(
					getLoadedTodosOrFilteredTodos(
						loadedTodos,
						sortFlag,
						searchFlag,
						searchContent,
					),
				);
			})
			.finally(() => setIsLoading(false));
	}, [refreshTodos, searchFlag, sortFlag, searchContent]);

	return {
		isLoading,
		setIsLoading,
		todos,
		setTodos,
		sortFlag,
		setSearchFlag,
		searchFlag,
		setSortFlag,
		searchContent,
		setSearchContent,
	};
};

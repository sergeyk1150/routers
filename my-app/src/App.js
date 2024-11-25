import { useState } from 'react';
import { useRequestAllTodos } from './hooks/use-request-all-todos';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import { TaskContainer } from './components/Task/TaskContainer';
import { NotFound } from './components/NotFound/NotFound';

import { ChangeBlockContainer } from './components/ChangeFormBlock/changeBlockContainer';

export const App = () => {
	const [refreshTodos, setRefreshTodos] = useState(false);
	const [id, setId] = useState();
	const {
		isLoading,
		setIsLoading,
		todos,
		setTodos,
		sortFlag,
		setSortFlag,
		searchFlag,
		setSearchFlag,
		searchContent,
		setSearchContent,
	} = useRequestAllTodos(refreshTodos);
	const state = {
		isLoading,
		setIsLoading,
		todos,
		setTodos,
		refreshTodos,
		setRefreshTodos,
		id,
		setId,
		searchContent,
		setSearchContent,
		sortFlag,
		setSortFlag,
		searchFlag,
		setSearchFlag,
	};

	return (
		<Routes>
			<Route path="/" element={<AppLayout {...state} />} />
			<Route path="/task/:id" element={<TaskContainer {...state} />} />
			<Route path="/change" element={<ChangeBlockContainer {...state} />} />
			<Route path="/404" element={<NotFound />} />
			<Route path="*" element={<Navigate to="/404" />} />
		</Routes>
	);
};

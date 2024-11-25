export const onRefresh = (
	inputChange,
	id,
	setInputChange,
	refreshTodos,
	setRefreshTodos,
	setDisabledChange,
	navigate,
) => {
	fetch(`http://localhost:3003/todos/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title: `${inputChange}`,
		}),
	})
		.then((responce) => {
			if (!responce.ok) {
				throw new Error('ошибка сервера');
			}
			setRefreshTodos(!refreshTodos);
			navigate('/', { replce: true });
		})
		.catch((error) => {
			console.error(error);
		})
		.finally(() => {
			setDisabledChange(true);
			setInputChange('');
		});
};

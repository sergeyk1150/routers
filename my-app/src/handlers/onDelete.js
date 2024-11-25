export const onDelete = (id, setTodos, refreshTodos, setRefreshTodos, navigate) => {
	fetch(`http://localhost:3003/todos/${id}`, {
		method: 'DELETE',
	})
		.then((responce) => {
			if (!responce.ok) {
				throw new Error('ошибка сервера');
			}
			setRefreshTodos(!refreshTodos);
			navigate(-1);
		})
		.catch((error) => {
			console.error(error);
		});
};

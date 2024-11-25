import { FormContainer } from './components/Form/formContainer';
import { TodosContainer } from './components/Todos/todosContainer';

import styles from './App.module.css';

export const AppLayout = (props) => {
	return (
		<div className={styles.app}>
			<h1>Todo list</h1>
			<FormContainer {...props} />
			<TodosContainer {...props} />
		</div>
	);
};

import { Button } from '../Button/button.js';
import styles from '../../App.module.css';
export const TaskLayout = (props) => {
	const { title, handlerDelete, handlerChangeContent, stepDown } = props;

	return (
		<div className={styles.task}>
			<h2>{title}</h2>
			<Button handler={handlerDelete}>Удалить</Button>
			<Button handler={handlerChangeContent}>Изменить</Button>
			<Button handler={stepDown}>Назад</Button>
		</div>
	);
};

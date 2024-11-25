import { Link, Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import styles from '../../App.module.css';

export const TodosLayout = (props) => {
	const { isLoading, todos } = props;

	return (
		<div className={styles.todo}>
			{isLoading ? (
				<Loader />
			) : (
				<ul className={styles['todo__list']}>
					{todos.map(({ id, title }) => (
						<li className={styles['todo__list-item']} key={id}>
							<Link
								to={`/task/${id}`}
								className={styles['todo__list-item__link']}
							>
								{title}
							</Link>
						</li>
					))}
				</ul>
			)}
			<Outlet />
		</div>
	);
};

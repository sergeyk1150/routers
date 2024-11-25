import styles from '../../App.module.css';
export const Button = (props) => {
	const { children, handler } = props;

	return (
		<button className={styles['btn']} onClick={handler}>
			{children}
		</button>
	);
};

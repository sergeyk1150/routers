import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onClose } from '../../handlers/onClose';
import { onChange } from '../../handlers/onChange';
import { onRefresh } from '../../handlers/onRefresh';
import { ChangeBlockLayout } from './changeBlockLayout';

export const ChangeBlockContainer = (props) => {
	const [inputChange, setInputChange] = useState('');
	const [disabledChange, setDisabledChange] = useState(true);
	const navigate = useNavigate();

	const { refreshTodos, setRefreshTodos, id } = props;

	const handlerChange = (target) => {
		return onChange(target, setDisabledChange, setInputChange);
	};
	const handlerRefresh = () => {
		return onRefresh(
			inputChange,
			id,
			setInputChange,
			refreshTodos,
			setRefreshTodos,
			setDisabledChange,
			navigate,
		);
	};
	const handlerClose = () => {
		return onClose(setInputChange, navigate);
	};

	const state = {
		inputChange,
		setInputChange,
		disabledChange,
		setDisabledChange,
		handlerChange,
		handlerRefresh,
		handlerClose,
		...props,
	};

	return <ChangeBlockLayout {...state} />;
};

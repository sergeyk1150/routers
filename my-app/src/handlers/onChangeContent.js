export const onChangeContent = (id, setChangeContent, setId, navigate) => {
	// setChangeContent(true);
	setId(id);
	navigate('/change', { replcae: true });
};

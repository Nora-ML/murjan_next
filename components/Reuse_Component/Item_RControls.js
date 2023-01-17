import Edit_RComp from "../Editing_Icons/Edit";

// edit and delete product based on id

const ItemControl = ({ id, type }) => {
	return (
		<>
			<Edit_RComp id={id} fn={updateFn} />
		</>
	);
};
export default ItemControl;

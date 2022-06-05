import { func } from "prop-types";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

//create your first component
const initialList = [
	{
		id: "a",
		name: "Make the bed",
	},
	{
		id: "b",
		name: "Wash my hands",
	},
	{
		id: "c",
		name: "Eat",
	},
	{
		id: "d",
		name: "Walk the dog",
	},
];
const Home = () => {
	const [list, setList] = useState(initialList);
	const [name, setName] = useState("");
	function handleChange(e) {
		setName(e.target.value);
	}
	function handleRemove(id) {
		const newList = list.filter((item) => item.id !== id);

		setList(newList);
	}
	function handleAdd() {
		const newList = list.concat({ name, id: uuidv4() });

		setList(newList);
		setName("");
	}
	const List = ({ list }) => (
		<ul className="list">
			{list.map((item) => (
				<li key={item.id}>
					{item.name}

					<button type="button" onClick={() => handleRemove(item.id)}>
						X
					</button>
				</li>
			))}
		</ul>
	);
	return (
		<div>
			<AddItem name={name} onChange={handleChange} onAdd={handleAdd} />
			<div className="list-div">
				<List list={list} />
			</div>
		</div>
	);
};

const AddItem = ({ name, onChange, onAdd }) => (
	<div className="input-div">
		<input type="text" value={name} onChange={onChange} />
		<button type="button" onClick={onAdd}>
			Add
		</button>
	</div>
);

export default Home;

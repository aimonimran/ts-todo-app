import React from 'react';
import '../App.css';

type Props = {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Searchbox: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
	return (
		<form onSubmit={handleAdd}>
			<input
				placeholder='Add...'
				type='text'
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button type='submit'>Add</button>
		</form>
	);
};

export default Searchbox;

import React from 'react';
import '../App.css';

type Props = {
	todo: string;
	todoList: string[];
	setTodoList: React.Dispatch<React.SetStateAction<string[]>>;
};

const Todo: React.FC<Props> = ({ todo, todoList, setTodoList }) => {
	const handleDelete = () => setTodoList(todoList.filter((_t) => _t !== todo));

	return (
		<div className='todo-container'>
			<p className='todo'>{todo}</p>
			<button className='delete' onClick={handleDelete}>
				Delete
			</button>
		</div>
	);
};

export default Todo;

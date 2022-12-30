import React from 'react';
import Todo from './Todo';

type Props = {
	todoList: string[];
	setTodoList: React.Dispatch<React.SetStateAction<string[]>>;
};

const TodoList: React.FC<Props> = ({ todoList, setTodoList }) => {
	return (
		<div>
			{todoList.map((todo, i) => (
				<Todo key={`${i}-${todo}`} todo={todo} todoList={todoList} setTodoList={setTodoList} />
			))}
		</div>
	);
};

export default TodoList;

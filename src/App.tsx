import React, { useState } from 'react';
import Searchbox from './components/Searchbox';
import TodoList from './components/TodoList';
import './App.css';

const App: React.FC = () => {
	const [todo, setTodo] = useState<string>('');
	const [todoList, setTodoList] = useState<string[]>([]);

	const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setTodoList([...todoList, todo]);
		setTodo('');
	};

	return (
		<div className='App'>
			<h1 className='heading'>To-Do App</h1>
			<Searchbox todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
			<TodoList todoList={todoList} setTodoList={setTodoList} />
		</div>
	);
};

export default App;

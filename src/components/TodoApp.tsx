import React, { useState } from 'react';
import { TaskList } from './TaskList';

export const TodoApp: React.FC = () => {
	const [tasks, setTasks] = useState<string[]>([]);
	const [newTask, setNewTask] = useState<string>('');

	const handleAddTask = () => {
		if (newTask.trim() === '') return;
		setTasks(prevTasks => [...prevTasks, newTask]);
		setNewTask('');
	};

	const handleDeleteTask = (index: number) => {
		setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
	};

	return (
		<div>
			<h1>TODO list</h1>
			<div>
				<input
					type='text'
					value={newTask}
					onChange={e => setNewTask(e.target.value)}
					placeholder='New Task'
				/>
				<button onClick={handleAddTask}>Add</button>
			</div>
			<TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
		</div>
	);
};

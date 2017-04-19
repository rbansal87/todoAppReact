import React from 'react';
import ReactDOM from 'react-dom';
import {Todo} from './components/main';


// Initial Task List to be shown
var tasksList = ["Task 1", "Task 2", "Task 3"];


ReactDOM.render(
	<Todo tasks={tasksList} />,
	document.getElementById('todo')
);
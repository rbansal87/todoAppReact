import React, { Component } from 'react';
import List from './list';

const ListContainer = ( {tasks, remove} ) => {
  return (
		<ul>
			{tasks.map((task, i) => {
				return (
					<List key={i} remove={remove} task={task} />
				)
			})}
		</ul>
	);
};


export default ListContainer;
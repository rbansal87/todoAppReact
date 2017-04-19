import React, { Component } from 'react';

export default class List extends Component {
	constructor() {
		super();
	}

	remove(task) {
		this.props.remove(task);
	}

	render() {

		const {task} = this.props;
		return (
			<li>
				<span>{task}</span>
				<button onClick={this.remove.bind(this, task)}>X</button>
			</li>
		)
	}
}
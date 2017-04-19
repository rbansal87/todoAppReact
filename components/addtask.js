import React, { Component } from 'react';

class AddNewTask extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event) {
		event.preventDefault();
		const input = this.taskInput;
		const {value} = input;
		input.value = '';
		this.props.updateList(value);
	}

	render() {
		return (
				<form onSubmit={this.onSubmit}>
					<input 
						type="text"
						ref={(taskInput) => { this.taskInput = taskInput; }}
					/>
				</form>
			);
	}
}

export default AddNewTask;
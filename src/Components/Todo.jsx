import React from 'react'


class Todo extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			todo: this.props.todo
		}
	}

	render(){
		return(
			<div className="todo">
				<div>Id: {this.state.todo.id}</div>
				<div>{this.state.todo.title}</div>
				<input id={this.state.todo.id} type="checkbox" defaultChecked={this.props.todo.completed} onClick={(e) => this.props.onCheckboxClick(e)}></input> 
			</div>
    	)
  	}
  
}

export default Todo
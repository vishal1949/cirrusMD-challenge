import React from 'react';
import Todo from './Todo';


class Todos extends React.Component{
	constructor(props){
		super(props)
		
		this.state = {
			todos: [],
			todosPerPage: 10,
		}
	}

	componentDidMount = (prevProps) => {
		if(prevProps !== this.props){
			this.setState({todos: this.props.todos})
		}
	}
	
	componentDidUpdate(prevProps){
		if(prevProps !== this.props){
			this.setState({todos: this.props.todos})
		}
	}

	handleCheckboxClick = ({target}) => {
		const {checked, id} = target;
		let results = this.state.todos.map(todo => {
			if(todo.id == id){
				todo.completed = checked
			}

			return todo
		})

		this.setState({todos: results})
	}

	render(){
		return (
			<ul className="todos-container">
				{this.state.todos.map(todo => (
					<li key={todo.id} >
						<Todo todo={todo} onCheckboxClick={this.handleCheckboxClick}/>
					</li>
				))}	
			</ul>
		)
	}
}


export default Todos
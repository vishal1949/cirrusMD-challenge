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

	componentDidMount = (prevState, prevProps) => {
		if(prevProps !== this.props){
			this.setState({todos: this.props.todos, isLoaded: true})
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
		console.log(this.state.todos[0]);
		return (
			<ul>
				{this.state.todos.map(todo => (
					<li key={todo.id} className='list-group-item'>
						<Todo todo={todo} onCheckboxClick={this.handleCheckboxClick}/>
					</li>
				))}	
			</ul>
		)
	}
}


export default Todos
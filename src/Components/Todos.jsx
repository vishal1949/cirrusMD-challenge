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

	componentDidMount(prevState, prevProps){
		console.log(prevProps)
		if(prevProps !== this.props){
		
			this.setState({todos: this.props.todos, isLoaded: true})
		}
	}

	render(){
		return (
			<ul>
				{this.state.todos.map(todo => (
					<li key={todo.id} className='list-group-item'>
						<Todo todo={todo}/>
					</li>
				))}	
			</ul>
		)
	}
}


export default Todos
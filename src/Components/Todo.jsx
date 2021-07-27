import React from 'react'
import "./todo.css"

const Todo = ({todo, onCheckboxClick}) => {
	
	return(
		<div className="todo">
			<div>{todo.id}</div>
			<div>{todo.title}</div>
			<input 
				id={todo.id} 
				type="checkbox" 
				defaultChecked={todo.completed} 
				onClick={(e) => onCheckboxClick(e)}>
			</input> 
		</div>
	)
}

export default Todo
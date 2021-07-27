import React from 'react'
import "./todo.css"

const imageUrl = "https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg"

const Todo = ({todo, onCheckboxClick}) => {
	
	return(
		<div className="todo flex">
			<div className="left-content flex">
				<img className="user-profile-image" alt="" src={imageUrl}></img>
				<div className="todo-data">
					<div classname="todo-id">{todo.id}</div>
					<div classname="todo-title">{todo.title}</div>
				</div>
				
			</div>
			<div className="right-content flex">
				<input 
					id={todo.id} 
					type="checkbox" 
					defaultChecked={todo.completed} 
					onClick={(e) => onCheckboxClick(e)}>
				</input> 
				<div className="black-bar"></div>
			</div>
		</div>
	)
}

export default Todo
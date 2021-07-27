import React from 'react'
import "./todo.css"

const imageUrl = "https://www.dovercourt.org/wp-content/uploads/2019/11/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg"

const Todo = ({todo, onCheckboxClick}) => {
	

	const handleClick = () => {
		window.alert("Every 'Action' has an equal and opposite Reaction. REACTION!!!")
	}

	const handleDivClick = () => {
		window.location.href = "http://www.vishavpreetsandhu.com"
	}

	return(
		<div className="todo flex">
			<div className="left-content flex" onClick={handleDivClick}>
				<img className="user-profile-image" alt="" src={imageUrl}></img>
				<div className="todo-data">
					<div classname="todo-id">Id: {todo.id}</div>
					<div classname="todo-title">Description: {todo.title}</div>
				</div>
				
			</div>
			<div className="right-content flex" >
				<input
					className="check-box" 
					id={todo.id} 
					type="checkbox" 
					defaultChecked={todo.completed} 
					onClick={(e) => onCheckboxClick(e)}>
				</input> 
				<button className="btn btn-primary btn-sm" onClick={handleClick}>Action</button>
				<div className="black-bar" onClick={handleDivClick} ></div>
			</div>
		</div>
	)
}

export default Todo
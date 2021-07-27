function Todo({todo}){

  return(
    <div>
      <div>{todo.id}</div>
      <div>{todo.title}</div>
      <div>{todo.completed ? "true": "false"}</div>
    </div>
  )
}

export default Todo
import React, { useEffect, useState } from 'react';
import './App.css';
import Pages from './Components/Pages';
import Todos from './Components/Todos';

const URL = "https://jsonplaceholder.typicode.com/todos";

function App() {

  const [todos, setTodos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfTodosPerPage, setNumberOfTodosPerPage] = useState(20);

  useEffect( () => {
    fetchTodos();
  }, [])

  const fetchTodos = async function(){
    let response = await fetch(URL);
  
    if(response.ok){
      let data = await response.json()
      setTodos(data);
      setIsLoaded(true);
    }
  }

  const indexOfLastTodo = pageNumber * numberOfTodosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - numberOfTodosPerPage;
  const visibleTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = function(pageNumber){
    setPageNumber(pageNumber);
  }

  return (
    <div className="App">
      {isLoaded ?  
        <React.Fragment>
          <Todos todos={visibleTodos} isLoaded={isLoaded}/>
          <Pages itemsPerPage={numberOfTodosPerPage} totalItems={todos.length} paginate={paginate}  />
        </React.Fragment> : <div>Loading</div> }
    </div>
  );
}

export default App;




import { useEffect, useState } from 'react';
import './App.css';
import Todos from './Components/Todos';

const URL = "https://jsonplaceholder.typicode.com/todos";

function App() {

  const [todos, setTodos] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfTodosPerPage, setNumberOfTodosPerPage] = useState(20);

  useEffect( () => {
    console.log("here")
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

  return (
    <div className="App">
      {isLoaded ? <Todos todos={todos} isLoaded={isLoaded}/> : <div>Loading</div> }
    </div>
  );
}

export default App;




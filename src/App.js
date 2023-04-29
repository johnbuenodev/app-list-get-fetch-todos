import React,{ useEffect, useState } from "react";

import './styles.css';

function App() {

  //let url1 = 'https://sujeitoprogramador.com/rn-api/?api=posts';

  //let url2 = 'https://jsonplaceholder.typicode.com/todos';

  const [todos, setTodos] = useState([]);

  useEffect(() => {

    loadAPI();

  },[]);

  function loadAPI() {
    let url2 = 'https://jsonplaceholder.typicode.com/todos';
    fetch(url2)
    .then((res) => res.json()) //convertendo json
    .then((jsonValue) => {
      setTodos(jsonValue);
      console.log(jsonValue);
    })
    }

  return (
    <div className="container">
     <div className="title">
      <h2 className="title-text">Lista de TODOS</h2>
     </div>
    

     <br/>
     <div className="list">
        <ul className="container-list">
        { todos.map( todo => {
            return(
                 <li key={todo.nome} className="lista-custom" >
                  <div className="card">
                    <span className="info">User ID: {todo.userId} </span>
                    <span className="info">ID: {todo?.id} </span>
                    <span className="info">TITLE: {todo?.title} </span>
                    <span className="info">COMPLETED: {todo?.completed} </span>
                  </div>
                 </li>
            )   
        })}
        </ul>
      </div>

    </div>
  );
}

export default App;


/*

  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },


*/
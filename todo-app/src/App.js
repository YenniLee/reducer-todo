import React, { useReducer } from 'react';
import './App.css';

//components 
import TodoList from './components/TodoList';


function App({ dispatch }) {

  return (
    <div className="App">
    <h1>My Todos List</h1>
    <TodoList />
    </div>
  );
}

export default App;

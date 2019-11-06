import React, { useReducer } from 'react';

import Todo from './Todo';
import TodoForm from './TodoForm';
import { todoReducer, initialState } from '../reducers/reducers';

export default function TodoList() {
  const [ state, dispatch ] = useReducer(todoReducer, initialState);
  // console.log('state:', state)
  
  return (
    <div className='input'>
        <TodoForm dispatch={dispatch} />
        <div className="todolist">
        {
            state.map((todo) => {
            return <Todo todo={todo} key={todo.id} dispatch={dispatch} />
            })
        }
        
        </div>
    </div>
  );
}
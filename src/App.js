import React, { useReducer} from 'react';
//import { UserForm } from './Components/UserForm';
import { ToDoList } from './Components/ToDoList';
import {v4 as uuidv4} from 'uuid'

//set initial global state
const todosInitialState ={
  todos:[{id:1, text: "number 1"},{id:2, text:"number 2"},{id:3, text:"number 3"}]
}

//create reducer function
function todosReducer(state,action){
  switch(action.type){
    case 'edit':
      const updatedTodo ={...action.payload}
      const updatedTodoIndex = state.todos.findIndex(t=>t.id === action.payload.id)
      const updatedTodos = [...state.todos.slice(0,updatedTodoIndex),updatedTodo,...state.todos.slice(updatedTodoIndex +1)]
      return {...state,todos:updatedTodos}
    case 'add':
      const newTodo = {id: uuidv4(), text:action.payload}
      const addedTodos =[...state.todos,newTodo]
      return{...state,todos:addedTodos}
    case 'delete':
      const filteredTodoState = state.todos.filter( todo=> todo.id !== action.payload.id)
      return{...state, todos:filteredTodoState}
    default:
      return todosInitialState
  }
}

export const TodosContext = React.createContext()

function App() {
  const [state, dispatch] = useReducer(todosReducer,todosInitialState)
    
  return (
    <div>
      <h1>
        To Do
      </h1>
      <TodosContext.Provider value={{state,dispatch}}>
        <ToDoList/>
      </TodosContext.Provider>
    </div>
  );
}

export default App;

import React, { useReducer} from 'react';
//import { UserForm } from './Components/UserForm';
import { ToDoList } from './Components/ToDoList';

//set initial global state
const todosInitialState ={
  todos:[{id:1, text: "number 1"},{id:2, text:"number 2"},{id:3, text:"number 3"}]
}

//create reducer function
function todosReducer(state,action){
  switch(action.type){
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

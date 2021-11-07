import React, {useContext, useState} from 'react'
import { TodosContext } from '../App'
import { Table, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

export function ToDoList(){
    const {state,dispatch} =useContext(TodosContext);
    const [todoText, setTodoText] = useState("")
    
    const handleSubmit = e =>{
        e.preventDefault();
        dispatch({type: 'add', payload: todoText})
        setTodoText("")
    }

    return(
        <div>
            <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicText">
                <Form.Control type="text" placeholder="Enter To Do" onChange={e=> setTodoText(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            <Table striped bordered hover>
            <thread>
                <tr>
                    <th>To Do</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thread>
            <tbody>
                {state.todos.map(todo =>(
                <tr key={todo.id}>
                   <td>{todo.text}</td>
                   <td>Edit</td>
                   <td onClick={()=> dispatch({type:'delete',payload:todo})}>Delete</td>
                </tr>
            ))}
            </tbody>
            </Table>
        </div>
    )
}


import React, {useState} from "react";
import {Form, Button, Alert} from 'react-bootstrap'

export function UserForm() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [emailError,setEmailError] = useState("")
    const [passwordError,setPasswordError] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        var emailValid=false;
        var passwordValid=false;
        if(email.length == 0){
            setEmailError("Email is required");
        }
        else if(email.length < 6){
            setEmailError("Email is not valid");
        }
        else{
            setEmailError("")
            emailValid=true
        }

        if(password.length < 6){
            setPasswordError("Password should be at least six characters");
        }
        else if(password.length == 0){
            setPasswordError("Password is required");
        }
        else{
            setPasswordError("")
            passwordValid=true
        }
        
        if(emailValid && passwordValid){
            alert('Email:' +email+' Passowrd:'+password);
            setEmail("");
            setPassword("");
        }
    }
    
    return (
        <div>
            <Form onSubmit = {handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} value={email} />
                    <Form.Text className="text-muted">This info is Private</Form.Text>
                </Form.Group>
                {emailError.length > 0 && <Alert varient="danger">{emailError}</Alert>}

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password}/>
                </Form.Group>
                {passwordError.length > 0 && <Alert varient="danger">{passwordError}</Alert>}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
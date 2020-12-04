import React, { useRef, useState } from 'react'


import {Card, Form, FormControl,Button, Alert, Container} from 'react-bootstrap'
import { NavLink} from 'react-router-dom'
import { auth } from '../firebase'

import { useStateValue } from '../StateProvider'


function Signup() {
    const [error,setError]=useState('')
    const {signUp}=useStateValue()
    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordConfirmRef=useRef()
    const [loading,setLoading]=useState(false)
   
    const handleSignup=async(e)=>{
        e.preventDefault()
        setLoading(true)
        setError('')

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
           return  (setError('Password do not match'),setLoading(false))
        }

        try{
       await signUp(emailRef.current.value,passwordRef.current.value)
     
       .then(()=>{
           auth.currentUser.sendEmailVerification()
           
        
   

          
       })   
      
       .catch((err)=>{
           setError(err.message)
           setLoading(false)
       })       
      
       

       
      

        }
        catch{
            setLoading(false)
            setError('failed to sign up')
            

        }

    }
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{minHeight:'100vh'}}>
        <div style={{width:'100vw',maxWidth:'400px'}}>
        <div className="signup" >
            <Card>
                <Card.Body>
                    <h1 className="text-center mb-4">Signup</h1>
    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSignup}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <FormControl ref={emailRef} type="input" required/>

                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <FormControl ref={passwordRef} type="password" required/>

                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Confirm password</Form.Label>
                            <FormControl ref={passwordConfirmRef} type="password" required/>

                        </Form.Group>

                        <Button type="submit" disabled={loading} className="w-100 mt-2">Signup</Button>
                    </Form>
             

                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-3">

                Already have an account? <NavLink to="/login">Login</NavLink>
            </div>

            
        </div>
        </div>
      </Container>
    )
}

export default Signup

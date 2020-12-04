import React,{useRef,useState} from 'react'
import {Card, Form, FormControl,Button, Alert, Container} from 'react-bootstrap'
import { useStateValue } from '../StateProvider'
import { Link, useHistory } from 'react-router-dom'


function Login() {
    const {signIn}=useStateValue()
    const [error,setError]=useState('')
    const {login}=useStateValue()
    const emailRef=useRef()
    const passwordRef=useRef()
    const history=useHistory()
    const [loading,setLoading]=useState(false)
    const handleLogin=async(e)=>{
        e.preventDefault()
        setLoading(true)
        setError('')

    

        try{
       await login(emailRef.current.value,passwordRef.current.value)
       .then(()=>{
        history.push('/')
     

       })
      
        
   
      

        }
        catch{
            setLoading(false)
            setError('incorrect email or password')

        }

    }
   
    return  (
        <Container className="d-flex justify-content-center align-items-center" style={{minHeight:'100vh'}}>
        <div style={{width:'100vw',maxWidth:'400px'}}>
        <div className="login">
            <Card className="card">
                <Card.Body>
                    <h1 className="text-center mb-4">Login</h1>
    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleLogin}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <FormControl ref={emailRef} type="input" required/>

                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <FormControl ref={passwordRef} type="password" required/>

                        </Form.Group>
                   

                        <Button type="submit" disabled={loading} className="w-100 mt-2">Login</Button>
                    </Form>
             

                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-3 ">

               <div> Register an account? <Link to="/signup">Signup</Link></div>
                <Button className="mt-4" onClick={signIn}>SIGN IN WITH GOOGLE</Button>
            </div>
           
            
        </div>
        </div>
      </Container>
    
    )
}

export default Login

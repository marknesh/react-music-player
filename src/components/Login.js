import React,{ useEffect, useRef,useState} from 'react'
import {Card, Form, FormControl,Button, Alert, Container} from 'react-bootstrap'
import { useStateValue } from '../StateProvider'
import { Link, useHistory } from 'react-router-dom'



function Login() {
   
    const [error,setError]=useState('')
    const {login,noUserError,signIn,setNoUserError}=useStateValue()
    const emailRef=useRef()
    const passwordRef=useRef()
    const history=useHistory()
    const [loading,setLoading]=useState(false)

    useEffect(()=>{


        return (()=>  setNoUserError(''))

    },[setNoUserError])


    const googleSignIn=async()=>{
        await signIn()

    }

 
    const handleLogin=async(e)=>{
        e.preventDefault()
        setLoading(true)
        setError('')

        

        
     
        
    

        try{
            
       await login(emailRef.current.value,passwordRef.current.value)
       .then(()=>{
        history.push('/')
     

       })
      .catch(err=>{
         setLoading(false)
         setNoUserError('')
         
        

         
         if(err.code === 'auth/invalid-email'){
           return  setError('Please enter a valid email address')

         }
         else if(err.code === 'auth/user-not-found'){
            return setError('Sorry user does not exist')
         }
         else if(err.code === 'auth/wrong-password'){
            return setError('invalid email or password')
         }
         else{
           
            setError(err.message)
         }
        
         
      })
        
   
      

        }
        catch{
            setLoading(false)
            setNoUserError('')
            setError('failed to login')

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
    {noUserError && <Alert variant="danger">{noUserError}</Alert>}
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
            <div><Link to="/forgot-password">Forgot password?</Link></div>

               <div> Need an account? <Link to="/signup">Signup</Link></div>
                <Button className="mt-4" onClick={googleSignIn}>SIGN IN WITH GOOGLE</Button>
            </div>
           
            
        </div>
        </div>
      </Container>
    
    )
}

export default Login

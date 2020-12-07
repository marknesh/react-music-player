import React, { useRef, useState } from 'react'
import { Alert, Button, Card, Container, Form, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'

function ForgotPassword() {

    const emailRef=useRef()

    const {resetPassword}=useStateValue()

    const [error,setError]=useState()
    const [sent,setSent]=useState()
    const [loading,setLoading]=useState(false)
    const [input,setInput]=useState()

    const handleReset=async(e)=>{
        e.preventDefault()
        setError('')
        try{
         setLoading(true)
        await resetPassword(emailRef.current.value)
        .then(()=>{
            setLoading(false)
            setSent('password reset link has been sent to your email')
            setInput('')
            

        }
            
        )
        .catch((err)=>{
            setLoading(false)
            setError(err.message)
        })

        }
        catch{
            setLoading(false)
            setError('failed to reset password')

        }
    }



    return (
        <Container className="d-flex justify-content-center align-items-center" style={{minHeight:'100vh'}}>
            <div style={{width:'100vw',maxWidth:'400px'}}>
            <Card>
                <Card.Body>
    {error && <Alert variant="danger">{error}</Alert>}
    {sent && <Alert variant="success">{sent}</Alert>}
                    <Form onSubmit={handleReset}>
                        <Form.Group id="reset-password">
                            <Form.Label>Enter email address</Form.Label>
                            <FormControl type="input" value={input} onChange={(e)=>setInput(e.target.value)} ref={emailRef} required/>
                        </Form.Group>

                        <Button type="submit" disabled={loading} >Reset password</Button>

                    </Form>
                   
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-3 ">
            <div><Link to="/login">Go back to login page</Link></div>
            </div>
            </div>
            
        </Container>
    )
}

export default ForgotPassword

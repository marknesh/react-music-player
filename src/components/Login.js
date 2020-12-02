import React from 'react'
import {provider,auth} from '../firebase'
import { useStateValue } from '../StateProvider'
import {actionTypes} from '../reducer'

function Login({loading}) {
    const [,dispatch]=useStateValue()

    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(result=>dispatch({
            type:actionTypes.SET_USER,
            user:result.user
        }))
        .catch(err=>console.log(err))

    }
    return loading ?(<div>loading...</div>): (
        <div className="login">
            <button onClick={signIn}>SIGN IN WITH GOOGLE</button>
            
        </div>
    
    )
}

export default Login

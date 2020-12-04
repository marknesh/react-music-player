import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useStateValue } from '../StateProvider'

function PrivateRoute2({children,...rest}) {
    const {user}=useStateValue()
    return (
        <Route {...rest} render={(props)=>{
            return user?[children]:<Redirect to="/login"/>
        }
        }>
            
        </Route>
    )
}

export default PrivateRoute2

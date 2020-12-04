import { createContext,  useContext, useEffect, useState } from "react";
import { auth, provider } from "./firebase";




const StateContext=createContext()



export const StateProvider=({children})=>{
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged(user=>{

            setUser(user)
            setLoading(false)
        })

        return unsubscribe;

    },[])

    const signUp=(email,password)=>{
        return (auth.createUserWithEmailAndPassword(email,password)

        
        )

    }
    const login=(email,password)=>{
        return auth.signInWithEmailAndPassword(email,password)
    }

    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(result=>setUser(result.user))
      

    }
    const [user,setUser]=useState()
  
    const value={
        signIn,
        user,
        signUp,
        login,
        setUser

    }
    return <StateContext.Provider value={value
      

    }>
        {!loading && children}
    </StateContext.Provider>
}

export const useStateValue=()=>useContext(StateContext)

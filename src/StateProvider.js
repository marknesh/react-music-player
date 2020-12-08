import { createContext,  useContext, useEffect, useState } from "react";
import Loading from "./components/Loading";
import { auth, provider } from "./firebase";




const StateContext=createContext()



export const StateProvider=({children})=>{
    const [loading,setLoading]=useState(true)
    const [noUserError,setNoUserError]=useState('')
    const [waiting,setWaiting]=useState(false)

    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged( (user)=>{
            
            

            setUser(user)
            if(waiting){
               return setLoading(true)
            }
            else{
                return setLoading(false)
                
            }
           
      
        
        })

        return unsubscribe;

    },[waiting])

    const signIn=()=>{
        
        setNoUserError('')
        try{
        auth.signInWithPopup(provider)

      
        .then(((result)=>{  
            setWaiting(true)          
            auth.fetchSignInMethodsForEmail(result.user.email)
            .then((result)=>{ 
                setWaiting(false)
                
                if(result.includes("password")){
                     return setLoading(false)
                }
                else{
                    setUser(null)
                     auth.signOut()
                    setNoUserError("No user with that account exists. Please sign up")
                    
                   
                  
                  
                    setLoading(false)
                    
                    
                }
            })
        }))

        .catch(err=>{
            if(err.code==="auth/popup-closed-by-user")
            setWaiting(false)
        })
    }
    catch{
        setWaiting(false)

    }
        
        
        
    
        
     
      

    }
    const signUp=(email,password)=>{
        return (auth.createUserWithEmailAndPassword(email,password)

        
        )

    }

    const resetPassword=(email)=>{
        return auth.sendPasswordResetEmail(email)
        
    }
    const login=(email,password)=>{
        return auth.signInWithEmailAndPassword(email,password)
    }

   
   
    const [user,setUser]=useState('')
  
    const value={
        
        user,
        signUp,
        login,
        setUser,
        resetPassword,
        noUserError,
        signIn,
        setNoUserError

    }
    return <StateContext.Provider value={value
      

    }>
        {loading && <Loading/>}
        {!loading && children}
    </StateContext.Provider>
}

export const useStateValue=()=>useContext(StateContext)

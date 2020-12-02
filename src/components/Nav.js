import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic ,faWindowClose} from '@fortawesome/free-solid-svg-icons'
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';



function Nav({setLibraryStatus,libraryStatus}) {
    const [{user}]=useStateValue()
    const logout=(e)=>{
        e.preventDefault()
        auth.signOut()
      
       

    }
    return (
        <nav>
        
            <h1>Waves</h1>
            <button onClick={()=>setLibraryStatus(!libraryStatus)}>
                {libraryStatus?'Close ':'Library '} 

                <FontAwesomeIcon  icon={libraryStatus?faWindowClose:faMusic} />
            </button>

   
            {user && <button onClick={(e)=>logout(e)}>Logout</button>}
          
  
           
 
        </nav>
    )
}

export default Nav

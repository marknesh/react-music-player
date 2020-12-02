
import "./styles/app.scss"
import Player from './components/Player';
import Song from './components/Song';
import data from './util'
import { useState,useEffect } from "react";
import Library from "./components/Library";
import Nav from "./components/Nav";
import Login from "./components/Login";
import { useStateValue} from "./StateProvider";
import {app} from './firebase'
import { actionTypes } from "./reducer";



function App() {
  const [{user},dispatch]=useStateValue()
  const [songs,setSongs]=useState(data())
  const [currentSong,setCurrentSong]=useState(songs[0])
  const [isPlaying,setIsPlaying]=useState(false)

  const [loading,setLoading]=useState(true)
  
 
    useEffect(()=>{
        app.auth().onAuthStateChanged(user=>{
       
          dispatch({
            type:actionTypes.SET_USER,
            user:user
          })
          setLoading(false)
       
      
       
        
    
      
       
             
        })
        
        
    },[dispatch])
    
 



  const [libraryStatus,setLibraryStatus]=useState(false)

  


  return !user ?(<Login loading={loading} />):(
    <div className={`app ${libraryStatus ? 'library-active':''}`}>
      
      <Nav  libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player currentSong={currentSong}
      songs={songs}
      setCurrentSong={setCurrentSong}
      setIsPlaying={setIsPlaying}
      isPlaying={isPlaying}
      setSongs={setSongs}
      
      
      />
      <Library songs={songs} libraryStatus={libraryStatus} setSongs={setSongs} setCurrentSong={setCurrentSong}/>
    </div>
  
  );
}

export default App;

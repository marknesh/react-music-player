
import "./styles/app.scss"
import Player from './components/Player';
import Song from './components/Song';
import data from './util'
import { useState } from "react";
import Library from "./components/Library";
import Nav from "./components/Nav";
import Login from "./components/Login";


import { BrowserRouter as Router} from "react-router-dom";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";
import PrivateRoute2 from "./components/PrivateRoute2";
import Switch from "react-bootstrap/esm/Switch";
import ForgotPassword from "./components/ForgotPassword";








function App() {
 
  
  const [songs,setSongs]=useState(data())
  const [currentSong,setCurrentSong]=useState(songs[0])
  const [isPlaying,setIsPlaying]=useState(false)






  const [libraryStatus,setLibraryStatus]=useState(false)

  


  return (
       
    <div className={`app ${libraryStatus ? 'library-active':''}`}>
      <Router >
        <Switch>
          
      
     <PrivateRoute2 path="/" exact ><Nav  libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
     <Song currentSong={currentSong} isPlaying={isPlaying} />
    <Player currentSong={currentSong}
      songs={songs}
      setCurrentSong={setCurrentSong}
      setIsPlaying={setIsPlaying}
      isPlaying={isPlaying}
      setSongs={setSongs}
      
      
      />
    
  <Library songs={songs} libraryStatus={libraryStatus} setSongs={setSongs} setCurrentSong={setCurrentSong}/>
  </PrivateRoute2>
 
  



      <PrivateRoute path="/signup" exact component={Signup} />
      <PrivateRoute path="/forgot-password" component={ForgotPassword} />
  


      <PrivateRoute path="/login" exact component={Login} />
      

    
   
      </Switch>


      
      

    
  
    
   
      </Router>
    </div>
  
  );
}

export default App;

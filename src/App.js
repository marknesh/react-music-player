
import "./styles/app.scss"
import Player from './components/Player';
import Song from './components/Song';
import data from './util'
import { useState } from "react";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  const [songs,setSongs]=useState(data())
  const [currentSong,setCurrentSong]=useState(songs[0])
  const [isPlaying,setIsPlaying]=useState(false)

  const [libraryStatus,setLibraryStatus]=useState(false)
  return (
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

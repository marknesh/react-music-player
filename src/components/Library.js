import React from 'react'
import LibrarySong from './LibrarySong'

function Library({songs,setCurrentSong,setIsPlaying,setSongs,libraryStatus}) {
    return (
        <div className={`library ${libraryStatus?'active-library':''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song=>(
                     <LibrarySong song={song} setSongs={setSongs} id={song.id}  key={song.id} songs={songs} setCurrentSong={setCurrentSong}/>


                ))}
               
            </div>
            
        </div>
    )
}

export default Library

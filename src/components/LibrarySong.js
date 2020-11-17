import React from 'react'

function LibrarySong({song,setCurrentSong,id,songs,setSongs}) {

    const songSelectHandler=()=>{
       
       setCurrentSong(song)
       setSongs(
        songs.map((targetSong) => {
            return {
              ...targetSong,
              active: targetSong.id === song.id
            }
          }
        )
      )
     
       

    }
    return (
        <div className={`library-song ${song.active?'selected':''}`} onClick={songSelectHandler}>
                  <img src={song.cover} alt={song.name} />
                  <div className="song-description">
                  <h3>{song.name}</h3>
          <h4>{song.artist}</h4>
                  </div>
          
       
        </div>
    )
}

export default LibrarySong




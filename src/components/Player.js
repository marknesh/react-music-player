import React, {  useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay,faAngleLeft,faAngleRight,faPause,faVolumeMute, faVolumeOff,faRandom,faBackward} from '@fortawesome/free-solid-svg-icons'

function Player({currentSong,setIsPlaying,isPlaying,songs,setSongs,setCurrentSong}) {
 
    const [volume,setVolume]=useState(60)
    const [mute,setMute]=useState(false)
    const [prevVolume,setPrevVolume]=useState(volume)
    const [repeat,setRepeat]=useState(false)
    const [shuffle,setShuffle]=useState(false)

    const audioRef=useRef(null)

    const handleShuffle=()=>{
        setShuffle(!shuffle)
        setRepeat(false)
    
    }

    const handleRepeat=()=>{
        setRepeat(!repeat)  
        setShuffle(false) 

        

    }


    const handleMute =(e)=>{
        if(mute){
            var currentVolume=prevVolume / 100;          
            audioRef.current.volume=currentVolume;
            setVolume(prevVolume);
            setMute(false);

        }
        else{
            setPrevVolume(volume)
            audioRef.current.volume = 0
            setMute(true)          
            setVolume(0)
            

        }
    }

    const handleVolumeChange=(e)=>{
        const volumeLevel = e.target.value /100 ;
        audioRef.current.volume=volumeLevel
        setVolume(e.target.value)
    }


    const activeLibraryHandler=(prevnext)=>{

      setSongs(
            songs.map((targetSong) => {
                return {
                  ...targetSong,
                  active: targetSong.id === prevnext.id
                }
              }
            )
          )
    }
    const playSongHandler=()=>{
        //something built to audio

        if(isPlaying){
            setIsPlaying(false)
            
            audioRef.current.pause()
            
        }
        else{
            audioRef.current.play()
            setIsPlaying(true)
           

        }
      

    }
    const getTime=(time)=>{
        return (
        Math.floor(time/60) + ":" + ("0"+ Math.floor(time % 60 )).slice(-2) )
    }

    const skipTrackHandler=(direction)=>{
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        let newIndex = 0;
        switch (direction) {
          case "skip-forward":
            //if you reach max, go back to zero
            newIndex = (currentIndex + 1) % songs.length;
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length])
            break;
    
          case "skip-back":
            //if you reach zero, go back to max
            newIndex = (songs.length - 1 + currentIndex) % songs.length;
            activeLibraryHandler(songs[(songs.length - 1 + currentIndex) % songs.length])
         
            break;

          default:
              newIndex+=1  
        }
    
        setCurrentSong(songs[newIndex]); 


    }
const dragHandler=(e)=>{
    audioRef.current.currentTime=e.target.value
    setSongInfo({...songInfo,currentTime:e.target.value})

}
const autoPlayHandler=(e)=>{
 
  
   if (isPlaying) {
    audioRef.current.play();
  }
   
}

const songEndHandler=()=>{
    if(repeat){
     
     audioRef.current.currentTime = 0
     if(isPlaying){
       audioRef.current.play()
     }
     

    }
    else if(shuffle){
        
        let newIndex = 0;
        newIndex=Math.floor(Math.random() * (songs.length))
        console.log(newIndex)
      
        activeLibraryHandler(songs[newIndex])
      
        setCurrentSong(songs[newIndex]); 
        autoPlayHandler()
      
       
      
        
    }
    else{
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    let nextSong = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextSong]); 
    activeLibraryHandler(songs[nextSong])
    }


}

    const timeUpdateHandler=(e)=>{
        const current=e.target.currentTime
        const duration=e.target.duration

        const roundedCurrent=Math.round(current)

        const roundedDuration=Math.round(duration)

        const animation=Math.round((roundedCurrent/roundedDuration)*100)
 
      /*   if (e.target.pause && isPlaying) {
            audioRef.current.play();
       } */
        setSongInfo({
            ...songInfo,currentTime:current,duration:duration,animationPercentage:animation
        })
    }

    const [songInfo,setSongInfo]=useState({
        currentTime:0,
        duration:0,
        animationPercentage:0
    })

    const trackANimation={
        transform:`translateX(${songInfo.animationPercentage}%)`
    }
    const trackAnim = {
        track: {
            transform: `translateX(${songInfo.animationPercentage}%)`,
        },
        volume: {
            transform: `translateX(${volume}%)`,
        },
    }
    return (
        <div className="player">
         
            <div className="time-control">

                <p>{getTime(songInfo.currentTime)}</p>
                <div className="track" style={{background:`linear-gradient(to right,${currentSong.color[0]},
                    ${currentSong.color[1]})`}}>

                <input min={0} onChange={dragHandler} max={songInfo.duration||0} value={songInfo.currentTime} type="range" />
            
                <div style={trackANimation} className="animate-track" ></div>
                </div>
                
                <p>{songInfo?getTime(songInfo.duration||0):"0.00"}</p>
            </div>
            <div className="volume">
            <div className="volume-control">
     
                <div className="volume-track">
                
                    <input type="range" min={0} value={volume} onChange={handleVolumeChange} max={100}/>

                    <div className="volume-animate" style={trackAnim.volume}></div>

                </div>
                
            

            </div>
           <div className="muteIcon">
            <FontAwesomeIcon size="1x" onClick={handleMute}  icon={mute ? faVolumeMute:faVolumeOff}/>
            </div>
        
            </div>
            <div className="play-control">
               <FontAwesomeIcon onClick={()=>skipTrackHandler('skip-back')} className="skip-back"  size="2x" icon={faAngleLeft} />
               <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying?faPause:faPlay} />
                <FontAwesomeIcon  onClick={()=>skipTrackHandler('skip-forward')}className="sjip-forward" size="2x" icon={faAngleRight} />

            </div>
            <div className="repeat-control">
                <FontAwesomeIcon size="2x" style={shuffle?{color:'red'}:{color:''}}  className="repeat" onClick={handleShuffle} icon={faRandom} />
                <FontAwesomeIcon size="2x" style={repeat?{color:'red'}:{color:''}}  className="repeat" onClick={handleRepeat} icon={faBackward} />
            </div>
            <audio onLoadedMetadata={timeUpdateHandler} onLoadedData={autoPlayHandler} onEnded={songEndHandler}  onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}/>
            
        </div>
    )
}



export default Player

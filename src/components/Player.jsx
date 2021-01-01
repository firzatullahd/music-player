import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faStepForward,
  faStepBackward, 
  faPause
} from "@fortawesome/free-solid-svg-icons";

function Player({ 
  currentSong, 
  isPlaying, 
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo, 
  songs, 
  setCurrentSong,
  activeLibraryHandler 
}) {

  const playSongHandler = () => {
    if(isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    return(
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }

  const onDragHandler = async (e) => {
    audioRef.current.currentTime = e.target.value;
    await setSongInfo({...songInfo, currentTime:e.target.value
    });
  }
  const onSkipHandler = async(dir) => {
    const currentIndex = songs.findIndex(song => song.id === currentSong.id)
    if(dir === "next"){
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    }
    if(dir === "previous"){
      if((currentIndex - 1) % songs.length === -1){
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
        if(isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
    }
    if(isPlaying) audioRef.current.play();
  }
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div className="track" style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}}>
          <input 
          type="range" 
          min={0}
          max={songInfo.duration ? songInfo.duration : 0}
          value={songInfo.currentTime}
          onChange={onDragHandler}
          />
          <div style={{ transform : `translateX(${songInfo.animationPercentage}%)`}} className="track-animation"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : "0.00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon 
        className="previous" 
        icon={faStepBackward} 
        size="2x"
        onClick={() => onSkipHandler("previous")} 
        />
        <FontAwesomeIcon
          className="play"
          icon={isPlaying ? faPause : faPlay}
          size="2x"
          onClick={playSongHandler}
        />
        <FontAwesomeIcon 
        className="next" 
        icon={faStepForward} 
        size="2x" 
        onClick={() => onSkipHandler("next")}
        />
      </div>
    </div>
  );
}

export default Player;

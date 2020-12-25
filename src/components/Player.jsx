import React, { useRef,useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faStepForward,
  faStepBackward, 
  faPause
} from "@fortawesome/free-solid-svg-icons";

function Player({ currentSong, isPlaying, setIsPlaying }) {
  const audioRef = useRef(null);
  const playSongHandler = () => {
    if(isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime, duration});
  }

  const getTime = (time) => {
    return(
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }

  const onDragHandler = e => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({...songInfo, currentTime:e.target.value
    });
    console.log(songInfo.currentTime);
  }

  const [songInfo,setSongInfo] = useState({
    currentTime:0,
    duration:0
  });

  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input 
        type="range" 
        min={0}
        max={songInfo.duration}
        value={songInfo.currentTime}
        onChange={onDragHandler}
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon 
        className="previous" 
        icon={faStepBackward} 
        size="2x" 
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
        />
      </div>
      <audio 
      onLoadedMetadata={timeUpdateHandler} 
      onTimeUpdate={timeUpdateHandler} 
      ref={audioRef} 
      src={currentSong.audio}></audio>
    </div>
  );
}

export default Player;

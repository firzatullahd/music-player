import React, { useRef,useState } from "react";
import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";
import data from "./util/songs";

function App() {
  const [songs, setSongs] = useState(data());
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo,setSongInfo] = useState({
    currentTime:0,
    duration:0
  });
  const audioRef = useRef(null);
  
  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime, duration});
  }

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player songs={songs} setSongs={setSongs} currentSong={currentSong} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} songInfo={songInfo} setSongInfo={setSongInfo} />
      <Library libraryStatus={libraryStatus} songs={songs} setSongs={setSongs} setCurrentSong={setCurrentSong} audioRef={audioRef} isPlaying={isPlaying} />
      <audio 
      onLoadedMetadata={timeUpdateHandler} 
      onTimeUpdate={timeUpdateHandler} 
      ref={audioRef} 
      src={currentSong.audio}></audio>
    </div>
  );
}

export default App;

import React from "react";
import { playAudio } from "../util/func";

function LibrarySong({ song, songs, setSongs, setCurrentSong, audioRef, isPlaying}) {
  const songSelectHandler = async() => {
    const {id} = song;
    const newSongs = songs.map(song => {
      if (song.id === id) {
        return {
          ...song, 
          active:true
        };
      }
      else {
        return{
          ...song, 
          active:false
        };
      }
    });
    setCurrentSong(song);
    setSongs(newSongs);
    await playAudio(isPlaying, audioRef);
  }
  return (
    <div className={song.active ? "library-song selected" : "library-song"} onClick={songSelectHandler} >
      <img src={song.cover} alt={song.name} sizes="100px" />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;

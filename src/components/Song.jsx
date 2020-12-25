import React from "react";

function Song({ currentSong }) {
  return (
    <div className="song-container">
      <img src={currentSong.cover} alt="song-cover" sizes="100px" />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
}

export default Song;

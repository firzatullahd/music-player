import React from "react";

function Song({ currentSong }) {
  return (
    <section className="song-container">
      <img src={currentSong.cover} alt="song-cover" sizes="100px" />
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </section>
  );
}

export default Song;

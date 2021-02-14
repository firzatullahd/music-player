import React, { useRef, useState } from "react";
import Head from "next/head";
import Player from "../components/Player";
import Song from "../components/Song";
import Library from "../components/Library";
import Nav from "../components/Nav";
import data from "../util/songs";

function App() {
  const [songs, setSongs] = useState(data());
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  const activeLibraryHandler = (nextPrevSong) => {
    const newSongs = songs.map((song) => {
      if (song.id === nextPrevSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  };
  const audioRef = useRef(null);
  const songEndHandler = async () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    if (isPlaying) await audioRef.current.play();
  };

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    const animationPercentage = Math.round(
      (Math.round(currentTime) / Math.round(duration)) * 100
    );
    console.log(animationPercentage);
    setSongInfo({ ...songInfo, currentTime, duration, animationPercentage });
  };
  // console.log(firebaseConfig.apiKey);
  return (
    <>
      <Head>
        <title>React Music Player</title>
        <meta
          name="description"
          content="React Music Player is a digital music service that gives you access to Stream many lo-fi songs, React Music Player was developed by firzatullahd"
        />
      </Head>
      <main className={libraryStatus ? "App library-active" : "App"}>
        <Nav
          libraryStatus={libraryStatus}
          setLibraryStatus={setLibraryStatus}
        />
        <Song currentSong={currentSong} />
        <Player
          activeLibraryHandler={activeLibraryHandler}
          songs={songs}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          audioRef={audioRef}
          songInfo={songInfo}
          setSongInfo={setSongInfo}
        />
        <Library
          libraryStatus={libraryStatus}
          songs={songs}
          setSongs={setSongs}
          setCurrentSong={setCurrentSong}
          audioRef={audioRef}
          isPlaying={isPlaying}
        />
        <audio
          onLoadedMetadata={timeUpdateHandler}
          onTimeUpdate={timeUpdateHandler}
          ref={audioRef}
          src={currentSong.audio}
          onEnded={songEndHandler}
        ></audio>
      </main>
    </>
  );
}

export default App;
